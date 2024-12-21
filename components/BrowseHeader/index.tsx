import * as React from "react";
import { SearchForm, type SearchFormPropsType } from "../SearchForm";
import { Banner, type BannerPropsType } from "../Banner";

import "./BrowseHeader.scss";

export type BrowseHeaderPropsType = {
  searchForm?: SearchFormPropsType;
  banner?: BannerPropsType;
};

export const BrowseHeader = ({ searchForm, banner }: BrowseHeaderPropsType) => {
  return (
    <section className="browse-header">
      <div className="browse-header__container">
        <div className="browse-header__content">
          <p className="browse-header__description">Location</p>
          <h3 className="browse-header__title">Bilzen, Tanjungbalai</h3>
          {searchForm && <SearchForm {...searchForm} />}
        </div>

        {banner && <Banner {...banner} />}
      </div>
    </section>
  );
};
