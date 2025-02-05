"use server";

import { auth } from "@/auth";
import { parseServerActionResponse, Status, Error } from "@/lib";
import { writeClient } from "@/sanity";
import { formSchema } from "../validation";
import slugify from "slugify";

export type CreateLocalType = {
  formData: FormData;
  categories: string[];
  type: string;
};

export const createLocal = async ({
  formData,
  categories,
  type,
}: CreateLocalType) => {
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: Status.ERROR,
    });

  const formValues = {
    type,
    title: formData.get("title") as string,
    address: formData.get("address") as string,
    phone: formData.get("phone") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
    categories,
    isVisited: false,
  };

  await formSchema.parseAsync(formValues);

  const { title, description, image, address, phone } = formValues;

  try {
    const local = {
      type,
      title,
      description,
      image,
      slug: {
        _type: "slug",
        current: slugify(title as string, { lower: true, strict: true }),
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      address,
      phone: phone.replaceAll(" ", "").replaceAll("-", ""),
      categories,
      rating: [
        {
          userEmail: session?.user?.email,
          value: 0,
        },
      ],
      isVisited: [
        {
          userEmail: session?.user?.email,
          value: false,
        },
      ],
    };

    const result = await writeClient.create({ _type: "local", ...local });

    return parseServerActionResponse({
      ...result,
      error: Error.EMPTY,
      status: Status.SUCCESS,
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: Status.ERROR,
    });
  }
};
