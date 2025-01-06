import * as React from "react";

import "./IsVisited.scss";

export type IsVisitedPropsType = {
  isVisited?: boolean;
};

export const IsVisited = ({ isVisited }: IsVisitedPropsType) => (
  <div className={"is-visited" + (isVisited ? " is-visited--active" : "")}>
    <button className="is-visited__button">
      <span
        className={
          "is-visited__circle" +
          (isVisited ? " is-visited__circle--active" : "")
        }
      />
      <p
        className={
          "is-visited__text" + (isVisited ? " is-visited__text--active" : "")
        }
      >
        {isVisited ? "Visited" : "Not visited"}
      </p>
    </button>
  </div>
);
