"use server";

import { writeClient } from "@/sanity";
import { descriptionSchema } from "../validation";

export type PatchDescriptionParamsType = {
  formData: FormData;
  localId: string;
};

export const patchDescription = async ({
  formData,
  localId,
}: PatchDescriptionParamsType) => {
  const form = {
    description: formData.get("description") as string,
  };

  descriptionSchema.parseAsync(form);

  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ description: form.description })
    .commit();
};
