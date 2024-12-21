import * as React from "react";

import "./Banner.scss";

export type BannerPropsType = {
  title: string;
  labels: string[];
  imageURL: string;
  minHeight?: number;
};

export const Banner = ({
  title,
  labels,
  imageURL,
  minHeight = 140,
}: BannerPropsType) => (
  <div className="banner">
    <div className="banner__container" style={{ minHeight }}>
      <div className="banner__img">
        <img src={imageURL} alt="Browse Banner" />
      </div>
      <div className="banner__content">
        <div className="banner__labels">
          {labels.map((label, i) => (
            <span key={i} className="banner__label">
              {label}
            </span>
          ))}
        </div>
        <h1 className="banner__title">
          <span>{title}</span>
        </h1>
      </div>
    </div>
  </div>
);
