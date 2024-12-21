import * as React from "react";

import { LocalCard } from "../LocalCard";
import { type Local } from "@/sanity/types";

import "./Browse.scss";

export type BrowsePropsType = {
  query: string;
  title: string;
  description: string;
  data: Local[];
};

export const Browse = ({
  query,
  title,
  description,
  data,
}: BrowsePropsType) => (
  <section className="browse">
    <div className="browse__container">
      <h2 className="browse__title">
        {query ? `Search result for "${query}"` : title}
      </h2>

      {data?.length > 0 ? (
        <ul className="browse__list">
          {data.map((post) => (
            <LocalCard key={post?._id} {...post} />
          ))}
        </ul>
      ) : (
        <p className="browse__description">{description}</p>
      )}
    </div>
  </section>
);
