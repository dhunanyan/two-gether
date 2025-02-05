import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { BrowseHeader, Browse, type LocalCardPropsType } from "@/components";
import { sanityFetch, SanityLive, CAFES_QUERY } from "@/sanity";

import "./page.scss";
import { convertToBase64FromLocalFilePath } from "@/lib/utils";

export type CafesPropsType = {
  searchParams: Promise<{
    search: string;
    categories: string;
  }>;
};

export const experimental_ppr = true;

export default async function Cafes({ searchParams }: CafesPropsType) {
  const session = await auth();

  if (!session) redirect("/");

  const { search, categories } = await searchParams;

  const { data } = (await sanityFetch({
    query: CAFES_QUERY,
    params: {
      search: search || null,
      categories: categories || null,
    },
  })) as unknown as { data: LocalCardPropsType[] };

  return (
    <>
      <BrowseHeader
        searchForm={{ search, categories, placeholder: "Search Cafes" }}
        banner={{
          imageURL: "/images/browse-header-cafes-banner.png",
          labels: ["Cafes"],
          title: "Find your next favorite spot",
        }}
      />
      <Browse
        data={data}
        search={search}
        title="All Cafes"
        userEmail={session.user?.email as string}
        description="No cafes found"
      />
      <SanityLive />
    </>
  );
}
