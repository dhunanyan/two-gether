import { auth } from "@/auth";
import { BrowseHeader, Browse } from "@/components";
import { type StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { redirect } from "next/navigation";

import "./page.scss";

export default async function Cafes({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const session = await auth();

  if (!session) redirect("/");

  const { query } = await searchParams;
  const params = { search: query || null };

  const { data } = (await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  })) as unknown as { data: StartupCardType[] };

  return (
    <>
      <BrowseHeader
        query={query}
        placeholder="Search Restaurants"
        imageURL="/images/browse-header-cafes-banner.png"
        label="Restaurants"
        title="Find your next favorite spot"
      />
      <Browse
        query={query}
        title="All Restaurants"
        description="No restaurants found"
        data={data}
      />
      <SanityLive />
    </>
  );
}
