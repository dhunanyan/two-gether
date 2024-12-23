import * as React from "react";

import { parseRating, parseFromRatingToStars } from "@/lib";
import { Local } from "@/sanity/types";

import { Star } from "./Star";
import "./RatingStars.scss";

export type RatingStarsPropsType = {
  _id: Local["_id"];
  rating: Local["rating"];
  userId?: string;
};

export const RatingStars = ({ rating, userId, _id }: RatingStarsPropsType) => {
  const value = parseRating(rating);
  const stars = parseFromRatingToStars(value).reverse();

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
            userId={userId as string}
          />
        ))}
      </div>
      <span className="rating-stars__count">{value}</span>
    </div>
  );
};
