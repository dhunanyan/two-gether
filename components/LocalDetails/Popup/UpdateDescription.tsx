"use client";

import * as React from "react";

import { Error, Field, patchDescription, Status } from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";

export type DescriptionPropsType = {
  config: PopupConfigsType[Field.DESCRIPTION];
  localId: string;
};

export const UpdateDescription = ({
  config,
  localId,
}: DescriptionPropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

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

      // router.push(pathname);
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
      <label htmlFor="description" className="popup__label">
        Description
      </label>
      <input
        required
        id="description"
        name="description"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., Historic Café Rynek"
        defaultValue={
          (config as PopupConfigsType[Field.DESCRIPTION]).description
        }
      />

      {errors.description && (
        <p className="popup__error">{errors.description}</p>
      )}
      <button className="popup__button">
        {isPending ? "Submit" : "Submitting..."}
      </button>
    </form>
  );
};
