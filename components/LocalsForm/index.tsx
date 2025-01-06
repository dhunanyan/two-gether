"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { OptionType, Select } from "../Select";
import {
  convertToBase64,
  createLocal,
  Icons,
  Status,
  Error,
  LocalType,
  getLocalTypeRoute,
} from "@/lib";
import { CategoryData } from "@/data";

import { z } from "zod";

import "./LocalsForm.scss";

export const OPTIONS_DATA: OptionType[] = [
  {
    value: LocalType.CAFE,
    title: "Cafe",
  },
  {
    value: LocalType.RESTAURANT,
    title: "Restaurant",
  },
];

export const LocalsForm = () => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [image, setImage] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [type, setType] = React.useState<OptionType>(OPTIONS_DATA[0]);
  const router = useRouter();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setImage(await convertToBase64(e.target.files?.[0] as Blob));
    } catch (error) {
      console.log(error);
      setImage(null);
    }
  };

  const handleFormSubmit = async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData
  ) => {
    try {
      formData.set(
        "image",
        await convertToBase64(formData.get("image") as Blob)
      );

      const result = await createLocal({
        formData,
        categories,
        type: type.value,
      });

      if (result.status === Status.SUCCESS) {
        router.push(
          `/browse/${getLocalTypeRoute(type.value as LocalType)}/${result._id}`
        );
      }

      return result;
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
    <form action={formAction} className="locals-form">
      <div className="locals-form__element locals-form__element--type">
        <label htmlFor="type" className="locals-form__label">
          Type
        </label>
        <Select options={OPTIONS_DATA} active={type} setActive={setType} />
        {errors.type && <p className="locals-form__error">{errors.type}</p>}
      </div>
      <div className="locals-form__element locals-form__element--title">
        <label htmlFor="title" className="locals-form__label">
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="e.g., Historic Café Rynek"
          autoComplete="off"
          required
        />
        {errors.title && <p className="locals-form__error">{errors.title}</p>}
      </div>
      <div className="locals-form__element locals-form__element--description">
        <label htmlFor="description" className="locals-form__label">
          Description
        </label>
        <div className="locals-form__element--description-textarea-container">
          <textarea
            id="description"
            name="description"
            placeholder="e.g., A charming café located near Kraków's Main Square, offering traditional Polish treats."
            required
          />
        </div>
        {errors.description && (
          <p className="locals-form__error">{errors.description}</p>
        )}
      </div>
      <div className="locals-form__element locals-form__element--categories">
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
                (categories.includes(id)
                  ? " locals-form__category--active"
                  : "")
              }
            >
              {title}
            </button>
          ))}
        </div>

        {errors.categories && (
          <p className="locals-form__error">{errors.categories}</p>
        )}
      </div>
      <div className="locals-form__element locals-form__element--image">
        <label className="locals-form__label">Image</label>
        <label htmlFor="image" className="locals-form__preview-image">
          {image ? (
            <img src={image} alt="Cafe or Restaurant Preview" />
          ) : (
            <div
              className="locals-form__preview-image-icon"
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
        <label
          htmlFor="image"
          className="locals-form__label locals-form__label--image"
        >
          Add image
        </label>
        {errors.image && <p className="locals-form__error">{errors.image}</p>}
      </div>
      <div className="locals-form__element locals-form__element--address">
        <label htmlFor="address" className="locals-form__label">
          Address
        </label>
        <input
          id="address"
          name="address"
          placeholder="e.g., Floriańska 12, Kraków"
          autoComplete="off"
        />
        {errors.address && (
          <p className="locals-form__error">{errors.address}</p>
        )}
      </div>
      <div className="locals-form__element locals-form__element--phone">
        <label htmlFor="phone" className="locals-form__label">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="off"
          pattern="[+]{0,1}[0-9]{0,15}"
          placeholder="e.g., +48 12 345 6789"
        />
        {errors.phone && <p className="locals-form__error">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        className="locals-form__button"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit your locals"}
        <span dangerouslySetInnerHTML={{ __html: Icons.Send }} />
      </button>
    </form>
  );
};
