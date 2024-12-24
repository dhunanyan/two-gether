import * as React from "react";

import { LOCALS_BY_AUTHOR_QUERY, client } from "@/sanity";
import { LocalCard } from "../LocalCard";
import { Local } from "@/sanity/types";

export type UserLocalsPropsType = {
  id: string;
  userEmail: string;
};

export const UserLocals = async ({ id, userEmail }: UserLocalsPropsType) => {
  const locals = (await client.fetch(LOCALS_BY_AUTHOR_QUERY, {
    id,
  })) as unknown as Local[];

  if (!locals.length) {
    return <p className="no-result">No posts yet</p>;
  }

  return (
    <>
      {locals.map((post) => (
        <LocalCard key={post._id} {...post} userEmail={userEmail} />
      ))}
    </>
  );
};
