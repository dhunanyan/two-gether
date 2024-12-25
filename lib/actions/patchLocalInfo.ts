import { writeClient } from "@/sanity";

export type PatchLocalInfoParamsType = {
  address: string;
  phone: string;
  localId: string;
};

export const patchLocalInfo = async ({
  address,
  phone,
  localId,
}: PatchLocalInfoParamsType) => {
  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ address, phone })
    .commit();
};
