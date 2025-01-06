import { auth } from "@/auth";
import { BrowseHeader, Browse, type LocalCardPropsType } from "@/components";
import { sanityFetch, SanityLive, RESTAURANTS_QUERY } from "@/sanity";
import { redirect } from "next/navigation";

import "./page.scss";

export type RestaurantsPropsType = {
  searchParams: Promise<{
    search: string;
    categories: string;
  }>;
};

export const experimental_ppr = true;

export default async function Restaurants({
  searchParams,
}: RestaurantsPropsType) {
  const session = await auth();

  if (!session) redirect("/");

  const { search, categories } = await searchParams;

  const { data } = (await sanityFetch({
    query: RESTAURANTS_QUERY,
    params: {
      search: search || null,
      categories: categories || null,
    },
  })) as unknown as { data: LocalCardPropsType[] };

  return (
    <>
      <BrowseHeader
        searchForm={{ search, categories, placeholder: "Search Restaurants" }}
        banner={{
          imageURL: "/images/browse-header-restaurants-banner.png",
          labels: ["Restaurants"],
          title: "Discover your next favorite meal",
        }}
      />
      <Browse
        search={search}
        title="All Restaurants"
        description="No restaurants found"
        data={data}
        userEmail={session.user?.email as string}
      />
      <SanityLive />
    </>
  );
}
