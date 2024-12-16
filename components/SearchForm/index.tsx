"use client";

import * as React from "react";
import Form from "next/form";
import { redirect, usePathname } from "next/navigation";

import { Icons } from "@/config";

import "./SearchForm.scss";

export const SearchForm = ({ query }: { query: string }) => {
  const pathname = usePathname();
  const ref = React.useRef<HTMLInputElement | null>(null);

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();

    redirect(pathname);
  };

  const handleFormClick = () => {
    if (!ref.current) return;

    ref.current.focus();
  };

  return (
    <div className="search">
      <Form
        action={pathname}
        scroll={false}
        onClick={handleFormClick}
        className="search__form"
      >
        <button
          type="reset"
          onClick={reset}
          dangerouslySetInnerHTML={{ __html: Icons.Times }}
        />
        <input
          ref={ref}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search Cafes"
          autoComplete="off"
          className="search__input"
        />
        <button
          type="submit"
          dangerouslySetInnerHTML={{ __html: Icons.Search }}
        />
        {/* {query && <Reset />} */}
      </Form>

      <button
        dangerouslySetInnerHTML={{ __html: Icons.Filter }}
        className="search__filter"
      />
    </div>
  );
};
