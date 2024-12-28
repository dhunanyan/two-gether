"use client";

import * as React from "react";

import { Error, Field, patchLocalInfo, Status } from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";

export type LocalInfoPropsType = {
  config: PopupConfigsType[Field.LOCAL_INFO];
  localId: string;
};

export const UpdateLocalInfo = ({ config, localId }: LocalInfoPropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData
  ) => {
    try {
      await patchLocalInfo({
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
      <label htmlFor="phone" className="popup__label">
        Local Info
      </label>
      <input
        required
        id="address"
        name="address"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., Historic Café Rynek"
        defaultValue={(config as PopupConfigsType[Field.LOCAL_INFO]).address}
      />
      {errors.address && <p className="popup__error">{errors.address}</p>}
      <input
        required
        id="phone"
        name="phone"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., Historic Café Rynek"
        defaultValue={(config as PopupConfigsType[Field.LOCAL_INFO]).phone}
      />
      {errors.phone && <p className="popup__error">{errors.phone}</p>}

      <button className="popup__button">
        {isPending ? "Submit" : "Submitting..."}
      </button>
    </form>
  );
};
