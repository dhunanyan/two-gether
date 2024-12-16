import * as React from "react";
import { StartupCard, type StartupCardType } from "../StartupCard";

import "./Browse.scss";

export type BrowsePropsType = {
  query: string;
  data: StartupCardType[];
};

export const Browse = ({ query, data }: BrowsePropsType) => (
  <section className="browse">
    <div className="browse__container">
      <h2 className="browse__title">
        {query ? `Search result for "${query}"` : "All Startups"}
      </h2>

      {data?.length > 0 ? (
        <ul className="browse__list">
          {data.map((post) => (
            <StartupCard key={post?._id} {...post} />
          ))}
        </ul>
      ) : (
        <p className="browse__description">No startups found</p>
      )}
    </div>
  </section>
);
