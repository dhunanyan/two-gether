"use server";

import { writeClient } from "@/sanity";
import { titleSchema } from "../validation";

export type PatchTitleParamsType = {
  localId: string;
  formData: FormData;
};

export const patchTitle = async ({
  localId,
  formData,
}: PatchTitleParamsType) => {
  const form = {
    title: formData.get("title") as string,
  };

  titleSchema.parseAsync(form);

  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ title: form.title })
    .commit();
};
