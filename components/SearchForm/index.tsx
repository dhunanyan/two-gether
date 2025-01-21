"use client";

import * as React from "react";
import Form from "next/form";
import { redirect, usePathname } from "next/navigation";

import { Icons } from "@/lib";

import "./SearchForm.scss";
import { FilterDropdown } from "./FilterDropdown";

export type SearchFormPropsType = {
  search: string;
  categories: string;
  placeholder: string;
};

export const SearchForm = ({
  search,
  // categories,
  placeholder,
}: SearchFormPropsType) => {
  const [filter, setFilter] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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

  const onDropdownItemClick = (id: string) => {
    setFilter((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="search">
      <Form
        scroll={false}
        action={pathname}
        className="search__form"
        onClick={handleFormClick}
      >
        <button
          type="reset"
          onClick={reset}
          dangerouslySetInnerHTML={{ __html: Icons.Times }}
        />
        <input
          ref={ref}
          type="text"
          name="search"
          defaultValue={search}
          placeholder={placeholder}
          autoComplete="off"
          className="search__input"
        />
        <button
          type="submit"
          dangerouslySetInnerHTML={{ __html: Icons.Search }}
        />
      </Form>

      <div className="search__filter">
        <button
          className="search__filter-button"
          onClick={() => setIsOpen((prev) => !prev)}
          dangerouslySetInnerHTML={{ __html: Icons.Filter }}
        />
        {isOpen && (
          <FilterDropdown onClick={onDropdownItemClick} filter={filter} />
        )}
      </div>
    </div>
  );
};
