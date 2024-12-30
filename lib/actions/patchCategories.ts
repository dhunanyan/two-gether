"use server";

import { writeClient } from "@/sanity";
import { categorySchema } from "../validation";

export type PatchCategoriesParamsType = {
  categories: string[];
  localId: string;
};

export const patchCategories = async ({
  categories,
  localId,
}: PatchCategoriesParamsType) => {
  categorySchema.parseAsync({
    categories,
  });

  await writeClient
    .withConfig({ useCdn: false })
    .patch(localId)
    .set({ categories })
    .commit();
};
