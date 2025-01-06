import * as React from "react";

import { LocalCard } from "../LocalCard";
import { type Local } from "@/sanity/types";

import "./Browse.scss";

export type BrowsePropsType = {
  data: Local[];
  search: string;
  title: string;
  userEmail: string;
  description: string;
};

export const Browse = ({
  data,
  search,
  title,
  userEmail,
  description,
}: BrowsePropsType) => (
  <section className="browse">
    <div className="browse__container">
      <h2 className="browse__title">
        {search ? `Search result for "${search}"` : title}
      </h2>

      {data?.length > 0 ? (
        <ul className="browse__list">
          {data.map((post) => (
            <LocalCard key={post?._id} {...post} userEmail={userEmail} />
          ))}
        </ul>
      ) : (
        <p className="browse__description">{description}</p>
      )}
    </div>
  </section>
);
