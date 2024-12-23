import * as React from "react";

import { parseRatingToValue, parseRatingToStars } from "@/lib";
import { Local } from "@/sanity/types";

import { Star } from "./Star";
import "./RatingStars.scss";

export type RatingStarsPropsType = {
  _id: Local["_id"];
  rating: Local["rating"];
  userEmail?: string;
};

export const RatingStars = ({
  rating,
  userEmail,
  _id,
}: RatingStarsPropsType) => {
  const value = parseRatingToValue(rating);
  const stars = parseRatingToStars(value).reverse();

  return (
    <div className="rating-stars">
      <div className="rating-stars__container">
        {stars.map((star, index) => (
          <Star
            key={index}
            star={star}
            index={index}
            total={stars.length}
            rating={rating}
            localId={_id}
            userEmail={userEmail as string}
          />
        ))}
      </div>
      <p className="rating-stars__value">
        <span className="rating-stars__value-avg">{value}</span>
        <span className="rating-stars__value-count">({rating?.length})</span>
      </p>
    </div>
  );
};
