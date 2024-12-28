"use server";

import { writeClient } from "@/sanity";
import { localInfoSchema } from "../validation";

export type PatchLocalInfoParamsType = {
  formData: FormData;
  localId: string;
};

export const patchLocalInfo = async ({
  formData,
  localId,
}: PatchLocalInfoParamsType) => {
  const form = {
    address: formData.get("address") as string,
    phone: formData.get("phone") as string,
  };

  localInfoSchema.parseAsync(form);

  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ address: form.address, phone: form.phone })
    .commit();
};
