"use server";

import { writeClient } from "@/sanity";
import { Local } from "@/sanity/types";

export type PatchisVisitedParamsType = {
  value: boolean;
  isVisited: Local["isVisited"];
  localId: string;
  userEmail: string;
};

export const patchIsVisited = async ({
  value,
  isVisited,
  localId,
  userEmail,
}: PatchisVisitedParamsType) => {
  const isVisitedToSubmit = { userEmail, value };

  if (!isVisited) {
    await writeClient
      .withConfig({ useCdn: false })
      .patch(localId)
      .set({ isVisited: [isVisitedToSubmit] })
      .commit();
    return;
  }

  const currentState = [...isVisited];

  const isVisitedForCurrentUserExists = currentState.find(
    (r) => r.userEmail === userEmail
  );

  if (!isVisitedForCurrentUserExists) {
    await writeClient
      .withConfig({ useCdn: false })
      .patch(localId)
      .set({ isVisited: [...currentState, isVisitedToSubmit] })
      .commit();
    return;
  }

  await writeClient
    .patch(localId)
    .set({
      isVisited: [
        ...currentState.filter((r) => r.userEmail !== userEmail),
        isVisitedToSubmit,
      ],
    })
    .commit();
};
