import * as React from "react";
import { redirect } from "next/navigation";

import { Banner, LocalsForm } from "@/components";
import { auth } from "@/auth";

import "./page.scss";

export default async function Create() {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="create">
        <div className="create__overlay" />
        <div className="create__container">
          <Banner
            imageURL="/images/create-local-banner.png"
            labels={["Cafes", "Restaurants"]}
            title="Find your next favorite spot"
            minHeight={260}
          />
          <LocalsForm />
        </div>
      </section>
    </>
  );
}
