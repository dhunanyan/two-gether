"use server";

import { writeClient } from "@/sanity";
import { imageSchema } from "../validation";

export type PatchImageParamsType = {
  localId: string;
  formData: FormData;
};

export const patchImage = async ({
  localId,
  formData,
}: PatchImageParamsType) => {
  const form = {
    image: formData.get("image") as string,
  };

  imageSchema.parseAsync(form);

  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ image: form.image })
    .commit();
};
