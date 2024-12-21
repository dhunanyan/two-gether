import * as React from "react";
import Link from "next/link";

import { Categories, Icons, parseCategory } from "@/lib";
import { type Local } from "@/sanity/types";

import "./LocalCard.scss";

export const LocalCard = ({ _id, rating, image, title, categories }: Local) => {
  return (
    <li className="local-card">
      <div className="local-card__image">
        <img src={image} alt="placeholder" />

        <span className="local-card__rating">
          <span
            className="local-card__rating-icon"
            dangerouslySetInnerHTML={{ __html: Icons.Star }}
          />
          <span className="local-card__rating-count">{rating || 0}</span>
        </span>
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

      <Link className="local-card__details" href={`/local/${_id}`}>
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
