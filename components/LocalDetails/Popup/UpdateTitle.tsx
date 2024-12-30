"use client";

import * as React from "react";

import { Error, Field, patchTitle, Status } from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";

export type TitlePropsType = {
  config: PopupConfigsType[Field.TITLE];
  localId: string;
};

export const UpdateTitle = ({ config, localId }: TitlePropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData
  ) => {
    try {
      await patchTitle({
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
      <label htmlFor="title" className="popup__label">
        Title
      </label>
      <input
        required
        id="title"
        name="title"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., Historic Café Rynek"
        defaultValue={(config as PopupConfigsType[Field.TITLE]).title}
      />

      {errors.title && <p className="popup__error">{errors.title}</p>}
      <button className="popup__button">
        {isPending ? "Submit" : "Submitting..."}
      </button>
    </form>
  );
};
