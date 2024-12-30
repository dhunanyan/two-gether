"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Error, Field, Icons, patchLocalInfo, Status } from "@/lib";
import { type PopupConfigsType } from ".";
import { z } from "zod";
import Link from "next/link";

export type LocalInfoPropsType = {
  config: PopupConfigsType[Field.LOCAL_INFO];
  localId: string;
};

export const UpdateLocalInfo = ({ config, localId }: LocalInfoPropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const router = useRouter();
  const pathname = usePathname();

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
      <label htmlFor="address" className="popup__label">
        Address
      </label>
      <input
        id="address"
        name="address"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., Historic Café Rynek"
        defaultValue={(config as PopupConfigsType[Field.LOCAL_INFO]).address}
      />
      {errors.address && <p className="popup__error">{errors.address}</p>}
      <label htmlFor="phone" className="popup__label">
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        autoComplete="off"
        className="popup__input"
        placeholder="e.g., +48 12 345 6789"
        defaultValue={(config as PopupConfigsType[Field.LOCAL_INFO]).phone}
      />
      {errors.phone && <p className="popup__error">{errors.phone}</p>}

      <hr className="popup__hr" />

      <button className="popup__button">
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
