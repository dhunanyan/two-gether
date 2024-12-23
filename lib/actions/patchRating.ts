import { writeClient } from "@/sanity";
import { Local } from "@/sanity/types";

export type PatchRatingParamsType = {
  value: number;
  rating: Local["rating"];
  userId: string;
  localId: string;
};

export const patchRating = async ({
  value,
  rating,
  userId,
  localId,
}: PatchRatingParamsType) => {
  const ratingToSubmit = { userId, value };

  if (!rating) {
    await writeClient
      .withConfig({ useCdn: false })
      .patch(localId)
      .set({ rating: [ratingToSubmit] })
      .commit();
    return;
  }

  const currentState = [...rating];

  const ratingForCurrentUserExists = currentState.find(
    (r) => r.userId === userId
  );

  if (!ratingForCurrentUserExists) {
    await writeClient
      .withConfig({ useCdn: false })
      .patch(localId)
      .set({ rating: [...currentState, ratingToSubmit] })
      .commit();
    return;
  }

  await writeClient
    .patch(localId)
    .set({
      rating: [
        ...currentState.filter((r) => r.userId !== userId),
        ratingToSubmit,
      ],
    })
    .commit();
};
