import * as React from "react";

import { LocalCard } from "../LocalCard";
import { type Local } from "@/sanity/types";

import "./Browse.scss";

export type BrowsePropsType = {
  data: Local[];
  query: string;
  title: string;
  userId: string;
  description: string;
};

export const Browse = ({
  data,
  query,
  title,
  userId,
  description,
}: BrowsePropsType) => (
  <section className="browse">
    <div className="browse__container">
      <h2 className="browse__title">
        {query ? `Search result for "${query}"` : title}
      </h2>

      {data?.length > 0 ? (
        <ul className="browse__list">
          {data.map((post) => (
            <LocalCard key={post?._id} {...post} userId={userId} />
          ))}
        </ul>
      ) : (
        <p className="browse__description">{description}</p>
      )}
    </div>
  </section>
);
