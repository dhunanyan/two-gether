"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  convertToBase64,
  Error,
  Field,
  Icons,
  patchImage,
  Status,
} from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";
import Link from "next/link";

export type ImagePropsType = {
  config: PopupConfigsType[Field.IMAGE];
  localId: string;
};

export const UpdateImage = ({ config, localId }: ImagePropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [image, setImage] = React.useState<string | null>(config.image);
  const router = useRouter();
  const pathname = usePathname();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setImage(await convertToBase64(e.target.files?.[0] as Blob));
    } catch (e) {
      console.log(e);
      setImage(null);
    }
  };

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData
  ) => {
    try {
      await patchImage({
        formData,
        localId,
      });

      router.push(pathname);
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        return {
          ...prevState,
          error: Error.VALIDATION,
          status: Status.ERROR,
        };
      }

      return {
        ...prevState,
        error: Error.UNEXPECTED,
        status: Status.ERROR,
      };
    }
  };

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction, isPending] = React.useActionState(handleFormSubmit, {
    error: Error.EMPTY,
    status: Status.INITIAL,
  });

  return (
    <form className="popup__form" action={formAction}>
      <Link
        href={pathname}
        className="popup__close-button"
        dangerouslySetInnerHTML={{ __html: Icons.Times }}
      />
      <label className="popup__label">Image</label>
      <label htmlFor="image" className="popup__preview-image">
        {image ? (
          <img src={image} alt="Cafe or Restaurant Preview" />
        ) : (
          <div
            className="popup__preview-image-icon"
            dangerouslySetInnerHTML={{ __html: Icons.Image }}
          />
        )}
      </label>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        autoComplete="off"
        onChange={handleImageChange}
        required
      />
      <label htmlFor="image" className="popup__label popup__label--image">
        Add image
      </label>
      {errors.image && <p className="popup__error">{errors.image}</p>}
      <button className="popup__button">
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
