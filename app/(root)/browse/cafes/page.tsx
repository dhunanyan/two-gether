import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { BrowseHeader, Browse, type LocalCardType } from "@/components";
import { sanityFetch, SanityLive, LOCALS_QUERY } from "@/sanity";

import "./page.scss";

export type CafesPropsType = {
  searchParams: Promise<{ query: string }>;
};

export default async function Cafes({ searchParams }: CafesPropsType) {
  const session = await auth();

  if (!session) redirect("/");

  const { query } = await searchParams;
  const params = { search: query || null };

  const { data } = (await sanityFetch({
    query: LOCALS_QUERY,
    params,
  })) as unknown as { data: LocalCardType[] };

  return (
    <>
      <BrowseHeader
        searchForm={{ query, placeholder: "Search Cafes" }}
        banner={{
          imageURL: "/images/browse-header-cafes-banner.png",
          labels: ["Cafes"],
          title: "Find your next favorite spot",
        }}
      />
      <Browse
        query={query}
        title="All Cafes"
        description="No cafes found"
        data={data}
      />
      <SanityLive />
    </>
  );
}
