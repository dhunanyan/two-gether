import { writeClient } from "@/sanity";

export type PatchTitleParamsType = {
  title: string;
  localId: string;
};

export const patchTitle = async ({ title, localId }: PatchTitleParamsType) => {
  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ title })
    .commit();
};
