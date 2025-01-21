import * as React from "react";

import "./IsVisited.scss";
import { Icons, patchIsVisited } from "@/lib";
import { Local } from "@/sanity/types";

export type IsVisitedPropsType = {
  isVisited: Local["isVisited"];
  localId: Local["_id"];
  userEmail?: string;
};

export const IsVisited = ({
  isVisited,
  localId,
  userEmail,
}: IsVisitedPropsType) => {
  const isActive = isVisited?.find(
    (current) => current.userEmail === userEmail
  )?.value;

  return (
    <div className={"is-visited" + (isActive ? " is-visited--active" : "")}>
      <p
        className={
          "is-visited__text" + (isActive ? " is-visited__text--active" : "")
        }
      >
        <span />
        {isActive ? "Visited" : "Not visited"}
      </p>

      <form
        action={async () => {
          "use server";
          await patchIsVisited({
            value: !isActive,
            isVisited,
            localId,
            userEmail: userEmail as string,
          });
        }}
      >
        <button
          className={
            "is-visited__button" +
            (isActive ? " is-visited__button--active" : "")
          }
          dangerouslySetInnerHTML={{
            __html: isActive ? Icons.Times : Icons.Check,
          }}
        />
      </form>
    </div>
  );
};
