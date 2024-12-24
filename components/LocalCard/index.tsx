import * as React from "react";
import Link from "next/link";

import { Categories, getLocalTypeRoute, LocalType, parseCategory } from "@/lib";
import { type Local } from "@/sanity/types";
import { RatingStars } from "../RatingStars";

import "./LocalCard.scss";

export type LocalCardPropsType = {
  userEmail: string;
} & Local;

export const LocalCard = ({
  _id,
  type,
  image,
  title,
  rating,
  userEmail,
  categories,
}: LocalCardPropsType) => {
  return (
    <li className="local-card">
      <div className="local-card__image">
        <img src={image} alt="placeholder" />
        <RatingStars _id={_id} userEmail={userEmail} rating={rating} />
      </div>

      <h3 className="local-card__title">{title}</h3>

      <div className="local-card__categories">
        {categories?.map((category, i) => (
          <Link
            key={i}
            className="local-card__category"
            href={`/?query=${category?.toLowerCase()}`}
          >
            <p>{parseCategory(category as Categories)}</p>
          </Link>
        ))}
      </div>

      <Link
        className="local-card__details"
        href={`/browse/${getLocalTypeRoute(type as LocalType)}/${_id}`}
      >
        Details
      </Link>
    </li>
  );
};

export const LocalCardSkeleton = () => (
  <>
    {[...Array(5)].map((_, i: number) => (
      <li key={i}>
        {/* TODO: @COMPONENT */}
        <div className="local-card_skeleton" />
      </li>
    ))}
  </>
);
