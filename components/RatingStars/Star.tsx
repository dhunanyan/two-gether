import * as React from "react";
import {
  Stars,
  Icons,
  getRatingIndexMessageBoxText,
  reverseBackRatingIndex,
} from "@/lib";

import { Local } from "@/sanity/types";
import { patchRating } from "@/lib/actions";

export type StarPropsType = {
  star: Stars;
  total: number;
  index: number;
  rating: Local["rating"];
  localId: string;
  userEmail: string;
};

export const Star = ({
  star,
  total,
  index,
  rating,
  localId,
  userEmail,
}: StarPropsType) => {
  return (
    <form
      key={total - index + 1}
      action={async () => {
        "use server";
        await patchRating({
          value: reverseBackRatingIndex(index + 1),
          rating,
          localId,
          userEmail,
        });
      }}
      className={`rating-stars__form rating-stars__form--${index + 1} rating-stars__form--${star}`}
    >
      <span className="rating-stars__message-box">
        {getRatingIndexMessageBoxText(reverseBackRatingIndex(index + 1))}
      </span>
      <button
        dangerouslySetInnerHTML={{
          __html: star === Stars.HALF ? Icons.HalfStar : Icons.Star,
        }}
      />
    </form>
  );
};
