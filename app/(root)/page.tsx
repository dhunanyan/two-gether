import * as React from "react";
import { redirect } from "next/navigation";

import { Splash as SplashComponent } from "@/components";
import { auth } from "@/auth";

export default async function Splash() {
  const session = await auth();

  if (!!session) redirect("/browse/cafes");

  return <SplashComponent />;
}
