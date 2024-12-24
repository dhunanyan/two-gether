import * as React from "react";
import Link from "next/link";

import { LocalDetailsHeader } from "./LocalDetailsHeader";
import { LocalDetailsAuthor } from "./LocalDetailsAuthor";
import { RatingStars } from "../RatingStars";

import {
  Categories,
  getCategoryIcon,
  getLocalTypeDisplayText,
  LocalType,
  parseCategory,
} from "@/lib";
import { Author, Local } from "@/sanity/types";

import "./LocalDetails.scss";

export type LocalDetailsPropsType = {
  userEmail: string;
} & Local;

export const LocalDetails = async ({
  _id,
  title,
  type,
  image,
  rating,
  author,
  categories,
  userEmail,
  _createdAt,
  description,
}: LocalDetailsPropsType) => {
  return (
    <div className="local-details">
      <LocalDetailsHeader />

      <section className="local-details__section local-details__section--hero">
        <div className="local-details__container">
          <div className="local-details__image">
            <img src={image} alt={title} />
          </div>
          <h2 className="local-details__title">{title}</h2>
          <p className="local-details__description">
            {getLocalTypeDisplayText(type as LocalType)}
          </p>
          <RatingStars rating={rating} userEmail={userEmail} _id={_id} />

          <hr className="local-details__hr" />
          <h2 className="local-details__subtitle">Description</h2>
          <p className="local-details__description">{description}</p>

          {categories?.length && (
            <>
              <hr className="local-details__hr" />
              <h2 className="local-details__subtitle">Category</h2>
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

          <hr className="local-details__hr" />
          <h2 className="local-details__subtitle">Author</h2>
          <LocalDetailsAuthor author={author as unknown as Author} />
          {/* <React.Suspense
          fallback={ TODO: @COMPONENT <div className="view_skeleton" />}
          >
          <View id={local._id} />
          </React.Suspense> */}
        </div>
      </section>
    </div>
  );
};
