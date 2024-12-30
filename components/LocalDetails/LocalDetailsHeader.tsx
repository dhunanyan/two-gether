import * as React from "react";
import Link from "next/link";

import { Icons, LocalType } from "@/lib";

export type LocalDetailsHeaderPropsType = {
  type: LocalType;
};

export const LocalDetailsHeader = ({ type }: LocalDetailsHeaderPropsType) => (
  <header className="local-details__header">
    <div className="local-details__header-container">
      <Link
        href={`/browse/${type}s`}
        className="local-details__header-button"
        dangerouslySetInnerHTML={{ __html: Icons.ArrowLeft }}
      />
      <h1 className="local-details__header-title">Details</h1>
      <form className="local-details__header-form">
        <button
          className="local-details__header-button"
          dangerouslySetInnerHTML={{ __html: Icons.BookMark }}
        />
      </form>
    </div>
  </header>
);
