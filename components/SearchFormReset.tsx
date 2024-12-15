"use client";
import React from "react";
import Link from "next/link";

import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    /* TODO: @COMPONENT */
    <button type="reset" onClick={reset} className="search-btn text-white">
      <Link href="/">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
