"use client";

import * as React from "react";

import { Error, Field, Icons, patchCategories, Status } from "@/lib";
import { CategoryData } from "@/data";
import { type PopupConfigsType } from ".";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export type UpdateCategoriesPropsType = {
  config: PopupConfigsType[Field.CATEGORIES];
  localId: string;
};

export const UpdateCategories = ({
  config,
  localId,
}: UpdateCategoriesPropsType) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [categories, setCategories] = React.useState<string[]>(
    (config as PopupConfigsType[Field.CATEGORIES]).categories
  );
  const router = useRouter();
  const pathname = usePathname();

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any
  ) => {
    try {
      await patchCategories({
        categories,
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

      <label htmlFor="categories" className="popup__label">
        Categories
      </label>

      <div className="popup__categories">
        {CategoryData.map(({ id, title }) => (
          <button
            key={id}
            type="button"
            onClick={() =>
              setCategories((prevState) =>
                prevState.includes(id)
                  ? prevState.filter((currentId) => currentId !== id)
                  : [...prevState, id]
              )
            }
            className={
              "popup__category" +
              ((
                config as PopupConfigsType[Field.CATEGORIES]
              ).categories.includes(id)
                ? " popup__category--active"
                : "")
            }
          >
            {title}
          </button>
        ))}
      </div>

      {errors.categories && <p className="popup__error">{errors.categories}</p>}

      <hr className="popup__hr" />

      <button className="popup__button">
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
