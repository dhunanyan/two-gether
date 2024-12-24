import * as React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { client, AUTHOR_BY_ID_QUERY } from "@/sanity";
import { UserLocals } from "@/components";

export const experimental_ppr = true;

export type UserPropsType = {
  params: Promise<{ id: string }>;
};

export default async function User({ params }: UserPropsType) {
  const { id } = await params;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>
          <Image
            src={user.image || ""}
            alt={user.name || ""}
            width={220}
            height={220}
            className="profile_image"
          />
          <p className="text-30-extrabold mt-7 text-center">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
          </p>

          <ul className="card_grid-sm">
            <React.Suspense
            /*TODO: @COMPONENT
            fallback={<StartupCardSkeleton />}*/
            >
              <UserLocals id={id} userEmail={session?.user?.email as string} />
            </React.Suspense>
          </ul>
        </div>
      </section>
    </>
  );
}
