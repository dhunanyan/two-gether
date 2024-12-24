import * as React from "react";
import { notFound } from "next/navigation";

import { LocalDetails } from "@/components";
import { client, LOCAL_BY_ID_QUERY } from "@/sanity";
import { Local as LocalResponseType } from "@/sanity/types";
import { auth } from "@/auth";

export const experimental_ppr = true;

export type LocalPropsType = {
  params: Promise<{ id: string }>;
};

export default async function Local({ params }: LocalPropsType) {
  const session = await auth();
  const id = (await params).id;

  // TODO: @SCHEMA
  const [local /* playlist */] = await Promise.all([
    (await client.fetch(LOCAL_BY_ID_QUERY, {
      id,
    })) as unknown as LocalResponseType,
    // (await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
    //   slug: "editor-picks-new",
    // })) as unknown as Playlist,
  ]);

  if (!local) return notFound();

  return <LocalDetails {...local} userEmail={session?.user?.email as string} />;
}
