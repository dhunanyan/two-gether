import * as React from "react";

import { LocalDetailsHeader } from "./LocalDetailsHeader";
import { LocalDetailsAuthor } from "./LocalDetailsAuthor";
import { RatingStars } from "../RatingStars";

import { Author, Local } from "@/sanity/types";
import { getLocalTypeDisplayText, LocalType } from "@/lib";

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
  userEmail,
  _createdAt,
  description,
}: LocalDetailsPropsType) => {
  console;
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
