"use server";

import { writeClient } from "@/sanity";
import { Local } from "@/sanity/types";

export type PatchisVisitedParamsType = {
  value: number;
  isVisited: Local["isVisited"];
  localId: string;
  userEmail: string;
};

export const patchisVisited = async ({
  value,
  isVisited,
  localId,
  userEmail,
}: PatchisVisitedParamsType) => {
  const ratingToSubmit = { userEmail, value };

  if (!isVisited) {
    await writeClient
      .withConfig({ useCdn: false })
      .patch(localId)
      .set({ rating: [ratingToSubmit] })
      .commit();
    return;
  }

  const currentState = [...isVisited];

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
