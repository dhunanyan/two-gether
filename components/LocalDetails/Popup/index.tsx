// "use client";

import * as React from "react";
import { convertToBase64, Error, Field, Icons, Status } from "@/lib";

import "./Popup.scss";
import { patchDescription, patchLocalInfo, patchTitle } from "@/lib/actions";
import { CategoryData } from "@/data";

export type PopupConfigsType = {
  [Field.IMAGE]: { image: string };
  [Field.TITLE]: { title: string };
  [Field.DESCRIPTION]: { description: string };
  [Field.CATEGORIES]: { categories: string[] };
  [Field.LOCAL_INFO]: {
    phone: string | undefined;
    address: string | undefined;
  };
};

export type PopupConfigType =
  | PopupConfigsType[Field.IMAGE]
  | PopupConfigsType[Field.TITLE]
  | PopupConfigsType[Field.DESCRIPTION]
  | PopupConfigsType[Field.CATEGORIES]
  | PopupConfigsType[Field.LOCAL_INFO];

export type PopupPropsType = {
  localId: string;
  fieldToEdit: Field;
  config: PopupConfigType;
};

const renderPopupContent = (field: Field, config: PopupConfigType) => {
  switch (field) {
    case Field.TITLE:
      return (
        <>
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
        </>
      );
    case Field.DESCRIPTION:
      return (
        <>
          <label htmlFor="description" className="popup__label">
            Description
          </label>
          <input
            required
            id="description"
            name="description"
            autoComplete="off"
            className="popup__input"
            defaultValue={
              (config as PopupConfigsType[Field.DESCRIPTION]).description
            }
            placeholder="e.g., A charming café located near Kraków's Main Square, offering traditional Polish treats."
          />
        </>
      );
    case Field.TITLE:
      return (
        <>
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
        </>
      );
    case Field.CATEGORIES:
      return (
        <>
          <label htmlFor="categories" className="locals-form__label">
            Categories
          </label>

          <div className="locals-form__categories">
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
                  "locals-form__category" +
                  ((
                    config as PopupConfigsType[Field.CATEGORIES]
                  ).categories.includes(id)
                    ? " locals-form__category--active"
                    : "")
                }
              >
                {title}
              </button>
            ))}
          </div>
        </>
      );
    case Field.TITLE:
      return (
        <>
          <label htmlFor="title" className="popup__label">
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={(config as PopupConfigsType[Field.TITLE]).title}
            placeholder="e.g., Historic Café Rynek"
            autoComplete="off"
            required
          />
        </>
      );
    default:
      return null;
  }
};

export const Popup = ({ localId, fieldToEdit, config }: PopupPropsType) => {
  // const [errors, setErrors] = React.useState<Record<string, string>>({});
  // const [image, setImage] = React.useState<string | null>(null);
  // const [categories, setCategories] = React.useState<string[]>(
  //   (config as PopupConfigsType[Field.CATEGORIES]).categories
  // );

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
    switch (fieldToEdit) {
      case Field.TITLE:
        await patchTitle({
          title: formData.get("title") as string,
          localId,
        });
        break;
      case Field.DESCRIPTION:
        await patchDescription({
          description: formData.get("description") as string,
          localId,
        });
        break;
      case Field.LOCAL_INFO:
        await patchLocalInfo({
          address: formData.get("address") as string,
          phone: formData.get("phone") as string,
          localId,
        });
        break;
      case Field.CATEGORIES:
        await patchTitle({
          title: (config as PopupConfigsType[Field.TITLE]).title,
          localId,
        });
        break;
      case Field.TITLE:
        await patchTitle({
          title: (config as PopupConfigsType[Field.TITLE]).title,
          localId,
        });
        break;
      default:
        break;
    }
  };
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [_, formAction, isPending] = React.useActionState(handleFormSubmit, {
  //   error: Error.EMPTY,
  //   status: Status.INITIAL,
  // });

  return (
    <div className="popup">
      <button
        className="popup__close-button"
        dangerouslySetInnerHTML={{ __html: Icons.Times }}
      />
      <div className="popup__layer" />
      {/* <div className="popup__container">
        <form className="popup__form" action={}>
          {renderPopupContent(fieldToEdit, config)}

          <button className="popup__button">Submit</button>
        </form>
      </div> */}
    </div>
  );
};
