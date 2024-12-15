import React from "react";
import Form from "next/form";

import { Reset } from "./Reset";

import { Icons } from "@/config";

export const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search Cafes"
        className="search-form__input"
      />

      <div className="flex gap-2">
        {query && <Reset />}
        <button
          type="submit"
          className="search-btn text-white"
          dangerouslySetInnerHTML={{ __html: Icons.Search }}
        />
      </div>
    </Form>
  );
};
