import * as React from "react";
import Link from "next/link";

import { LocalDetailsHeader } from "./LocalDetailsHeader";
import { LocalDetailsAuthor } from "./LocalDetailsAuthor";
import { RatingStars } from "../RatingStars";

import {
  Categories,
  Field,
  formatDateAndTime,
  getCategoryIcon,
  getLocalTypeDisplayText,
  Icons,
  LocalType,
  parseCategory,
} from "@/lib";
import { Author, Local } from "@/sanity/types";

import "./LocalDetails.scss";
import { Popup, type PopupConfigType } from "./Popup";

export type LocalDetailsPropsType = {
  userEmail: string;
  edit: string;
} & Local;

export const LocalDetails = async ({
  _id,
  title,
  type,
  image,
  phone,
  edit,
  rating,
  author,
  address,
  categories,
  userEmail,
  _createdAt,
  _updatedAt,
  description,
}: LocalDetailsPropsType) => {
  const authorIsCurrentUser = userEmail === (author as unknown as Author).email;

  const getPopupConfig = (): PopupConfigType => {
    switch (edit as Field) {
      case Field.IMAGE:
        return { image: image as string };
      case Field.TITLE:
        return { title: title as string };
      case Field.DESCRIPTION:
        return { description: (description || "") as string };
      case Field.CATEGORIES:
        return { categories: categories as string[] };
      case Field.LOCAL_INFO:
        return {
          phone: phone as string | undefined,
          address: address as string | undefined,
        };
    }
  };

  return (
    <div className="local-details">
      <LocalDetailsHeader type={type as LocalType} />

      <div className="local-details__content">
        <div className="local-details__container">
          <section className="local-details__section">
            <div className="local-details__image">
              <img src={image} alt={title} />
              {authorIsCurrentUser && (
                <Link
                  href={`?edit=${Field.IMAGE}`}
                  className="local-details__edit-button"
                  dangerouslySetInnerHTML={{ __html: Icons.Pen }}
                />
              )}
            </div>
            <h2 className="local-details__title">
              {title}
              {authorIsCurrentUser && (
                <Link
                  href={`?edit=${Field.TITLE}`}
                  className="local-details__edit-button"
                  dangerouslySetInnerHTML={{ __html: Icons.Pen }}
                />
              )}
            </h2>
            <p className="local-details__description">
              {getLocalTypeDisplayText(type as LocalType)}
            </p>
            <RatingStars rating={rating} userEmail={userEmail} _id={_id} />
          </section>
          <hr className="local-details__hr" />
          <section className="local-details__section">
            <h2 className="local-details__subtitle">
              Description
              {authorIsCurrentUser && (
                <Link
                  href={`?edit=${Field.DESCRIPTION}`}
                  className="local-details__edit-button"
                  dangerouslySetInnerHTML={{ __html: Icons.Pen }}
                />
              )}
            </h2>
            <p className="local-details__description">{description}</p>
          </section>
          <section className="local-details__section">
            {categories?.length && (
              <>
                <hr className="local-details__hr" />
                <h2 className="local-details__subtitle">
                  Categories
                  {authorIsCurrentUser && (
                    <Link
                      href={`?edit=${Field.CATEGORIES}`}
                      className="local-details__edit-button"
                      dangerouslySetInnerHTML={{ __html: Icons.Pen }}
                    />
                  )}
                </h2>
                <ul className="local-details__list">
                  {categories.map((category) => (
                    <li key={category} className="local-details__list-item">
                      <span>{parseCategory(category as Categories)}</span>
                      <Link
                        className="local-details__list-link"
                        href={`/?query=${category?.toLowerCase()}`}
                        dangerouslySetInnerHTML={{
                          __html: getCategoryIcon(category as Categories),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <hr className="local-details__hr" />

          <section className="local-details__section">
            <h2 className="local-details__subtitle">
              Local Info
              {authorIsCurrentUser && (
                <Link
                  href={`?edit=${Field.LOCAL_INFO}`}
                  className="local-details__edit-button"
                  dangerouslySetInnerHTML={{ __html: Icons.Pen }}
                />
              )}
            </h2>

            <p className="local-details__description local-details__description--info">
              <span>Phone: </span>
              {phone ? (
                <Link
                  href={`tel:${phone}`}
                  className="local-details__description-phone"
                >
                  {phone}
                </Link>
              ) : (
                "---"
              )}
            </p>
            <p className="local-details__description local-details__description--info">
              <span>Address: </span>
              {address ? address : "---"}
            </p>
          </section>

          <hr className="local-details__hr" />

          <section className="local-details__section">
            <h2 className="local-details__subtitle">Creator</h2>
            <LocalDetailsAuthor author={author as unknown as Author} />
          </section>

          <hr className="local-details__hr" />

          <section className="local-details__section">
            <h2 className="local-details__subtitle">Additional Info</h2>
            <p className="local-details__description local-details__description--info">
              <span>Created at: </span>
              {formatDateAndTime(_createdAt)}
            </p>
            <p className="local-details__description local-details__description--info">
              <span>Modified at: </span>
              {formatDateAndTime(_updatedAt)}
            </p>
          </section>

          {/*<React.Suspense
          fallback={ TODO: @COMPONENT <div className="view_skeleton" />}
          >
          <View id={local._id} />
          </React.Suspense> */}
        </div>
      </div>

      {typeof edit === "string" && (
        <Popup field={edit as Field} localId={_id} config={getPopupConfig()} />
      )}
    </div>
  );
};
