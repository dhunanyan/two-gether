import { writeClient } from "@/sanity";

export type PatchDescriptionParamsType = {
  description: string;
  localId: string;
};

export const patchDescription = async ({
  description,
  localId,
}: PatchDescriptionParamsType) => {
  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ description })
    .commit();
};
