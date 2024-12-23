import * as React from "react";
import { Icons, Stars } from "@/lib";

import { Local } from "@/sanity/types";
import { patchRating } from "@/lib/actions";

export type StarPropsType = {
  star: Stars;
  total: number;
  index: number;
  rating: Local["rating"];
  localId: string;
  userId: string;
};

const parseReversedIndex = (index: number): number => {
  switch (index) {
    case 1:
      return 5;
    case 2:
      return 4;
    case 3:
      return 3;
    case 4:
      return 2;
    case 5:
      return 1;
    default:
      return 0;
  }
};

export const Star = ({
  star,
  total,
  index,
  rating,
  localId,
  userId,
}: StarPropsType) => {
  return (
    <form
      key={total - index + 1}
      action={async () => {
        "use server";
        await patchRating({
          value: parseReversedIndex(index + 1),
          rating,
          userId,
          localId,
        });
      }}
      className={`rating-stars__form rating-stars__form--${index + 1} rating-stars__form--${star}`}
    >
      <button
        dangerouslySetInnerHTML={{
          __html: star === Stars.HALF ? Icons.HalfStar : Icons.Star,
        }}
      />
    </form>
  );
};
