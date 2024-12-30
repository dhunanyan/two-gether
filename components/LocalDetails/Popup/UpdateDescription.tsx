"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Error, Field, Icons, patchDescription, Status } from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";
import Link from "next/link";

export type DescriptionPropsType = {
  config: PopupConfigsType[Field.DESCRIPTION];
  localId: string;
};

export const UpdateDescription = ({
  config,
  localId,
}: DescriptionPropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const router = useRouter();
  const pathname = usePathname();

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData
  ) => {
    try {
      await patchDescription({
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

      <label htmlFor="description" className="popup__label">
        Description
      </label>
      <div className="popup__textarea-container">
        <textarea
          required
          id="description"
          name="description"
          autoComplete="off"
          placeholder="e.g., Historic Café Rynek"
          defaultValue={
            (config as PopupConfigsType[Field.DESCRIPTION]).description
          }
        />
      </div>
      {errors.description && (
        <p className="popup__error">{errors.description}</p>
      )}

      <hr className="popup__hr" />

      <button className="popup__button">
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
