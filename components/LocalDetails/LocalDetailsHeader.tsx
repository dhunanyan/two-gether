import * as React from "react";
import Link from "next/link";

import { Icons } from "@/lib";

export const LocalDetailsHeader = () => (
  <header className="local-details__header">
    <div className="local-details__container local-details__container--header">
      <Link
        href="/"
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
