import * as React from "react";

import { LOCALS_BY_AUTHOR_QUERY, client } from "@/sanity";
import { LocalCard, type LocalCardType } from "../LocalCard";

export const UserLocals = async ({ id }: { id: string }) => {
  const startups = (await client.fetch(LOCALS_BY_AUTHOR_QUERY, {
    id,
  })) as LocalCardType[];

  return (
    <>
      {startups.length > 0 ? (
        startups.map((post) => <LocalCard key={post._id} {...post} />)
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
