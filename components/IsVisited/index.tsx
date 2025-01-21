import * as React from "react";

import "./IsVisited.scss";
import { Icons } from "@/lib";

export type IsVisitedPropsType = {
  isVisited?: boolean;
};

export const IsVisited = ({ isVisited }: IsVisitedPropsType) => (
  <div className={"is-visited" + (isVisited ? " is-visited--active" : "")}>
    <p
      className={
        "is-visited__text" + (isVisited ? " is-visited__text--active" : "")
      }
    >
      <span />
      {isVisited ? "Visited" : "Not visited"}
    </p>

    <button
      className={
        "is-visited__button" + (isVisited ? " is-visited__button--active" : "")
      }
      dangerouslySetInnerHTML={{
        __html: isVisited ? Icons.Times : Icons.Check,
      }}
    />
  </div>
);
