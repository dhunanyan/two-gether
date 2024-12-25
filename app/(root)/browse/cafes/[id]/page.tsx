import * as React from "react";
import { notFound } from "next/navigation";

import { LocalDetails } from "@/components";
import { client, LOCAL_DETAILS } from "@/sanity";
import { Local as LocalResponseType } from "@/sanity/types";
import { auth } from "@/auth";

export const experimental_ppr = true;

export type LocalPropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ edit: string }>;
};

export default async function Cafe({ params, searchParams }: LocalPropsType) {
  const session = await auth();
  const id = (await params).id;

  const { edit } = await searchParams;

  // TODO: @SCHEMA
  const [local /* playlist */] = await Promise.all([
    (await client.fetch(LOCAL_DETAILS, {
      id,
    })) as unknown as LocalResponseType,
    // (await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
    //   slug: "editor-picks-new",
    // })) as unknown as Playlist,
  ]);

  if (!local) return notFound();

  return (
    <LocalDetails
      {...local}
      userEmail={session?.user?.email as string}
      edit={edit}
    />
  );
}
