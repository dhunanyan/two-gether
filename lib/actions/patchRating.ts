import { writeClient } from "@/sanity";
import { Local } from "@/sanity/types";

export type PatchRatingParamsType = {
  value: number;
  rating: Local["rating"];
  localId: string;
  userEmail: string;
};

export const patchRating = async ({
  value,
  rating,
  localId,
  userEmail,
}: PatchRatingParamsType) => {
  const ratingToSubmit = { userEmail, value };

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
    (r) => r.userEmail === userEmail
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
        ...currentState.filter((r) => r.userEmail !== userEmail),
        ratingToSubmit,
      ],
    })
    .commit();
};
