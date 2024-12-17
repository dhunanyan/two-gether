import * as React from "react";
import { SearchForm } from "../SearchForm";

import "./BrowseHeader.scss";

export type BrowseHeaderPropsType = {
  query: string;
  placeholder: string;
  imageURL: string;
  label: string;
  title: string;
};

export const BrowseHeader = ({
  query,
  placeholder,
  imageURL,
  label,
  title,
}: BrowseHeaderPropsType) => {
  return (
    <section className="browse-header">
      <div className="browse-header__container">
        <div className="browse-header__content">
          <p className="browse-header__description">Location</p>
          <h3 className="browse-header__title">Bilzen, Tanjungbalai</h3>
          <SearchForm query={query} placeholder={placeholder} />
        </div>

        <div className="browse-header__banner">
          <div className="browse-header__banner-container">
            <div className="browse-header__banner-img">
              <img src={imageURL} alt="Browse Banner" />
            </div>
            <div className="browse-header__banner-content">
              <span className="browse-header__banner-label">{label}</span>
              <h1 className="browse-header__banner-title">
                <span>{title}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
