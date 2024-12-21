import { auth } from "@/auth";
import { BrowseHeader, Browse, type LocalCardType } from "@/components";
import { sanityFetch, SanityLive, LOCALS_QUERY } from "@/sanity";
import { redirect } from "next/navigation";

import "./page.scss";

export type RestaurantsPropsType = {
  searchParams: Promise<{ query: string }>;
};

export default async function Restaurants({
  searchParams,
}: RestaurantsPropsType) {
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
      <>
        <BrowseHeader
          searchForm={{ query, placeholder: "Search Restaurants" }}
          banner={{
            imageURL: "/images/browse-header-restaurants-banner.png",
            labels: ["Restaurants"],
            title: "Discover your next favorite meal",
          }}
        />
        <Browse
          query={query}
          title="All Restaurants"
          description="No restaurants found"
          data={data}
        />
        <SanityLive />
      </>
    </>
  );
}
