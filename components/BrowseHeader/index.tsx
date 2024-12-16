import * as React from "react";
import { SearchForm } from "../SearchForm";

import "./BrowseHeader.scss";

export type BrowseHeaderPropsType = {
  query: string;
};

export const BrowseHeader = ({ query }: BrowseHeaderPropsType) => {
  return (
    <section className="browse-header">
      <div className="browse-header__container">
        <div className="browse-header__content">
          <p className="browse-header__description">Location</p>
          <h3 className="browse-header__title">Bilzen, Tanjungbalai</h3>
          <SearchForm query={query} />
        </div>

        <div className="browse-header__banner">
          <div className="browse-header__banner-container">
            <div className="browse-header__banner-img">
              <img src="/images/browse-header-banner.png" alt="Browse Banner" />
            </div>
            <div className="browse-header__banner-content">
              <span className="browse-header__banner-label">Cafes</span>
              <h1 className="browse-header__banner-title">
                <span>Find your next favorite spot</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
