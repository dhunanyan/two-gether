"use client";

import * as React from "react";

import { redirect, usePathname } from "next/navigation";
import { Icons } from "@/lib";

export const Reset = () => {
  const pathname = usePathname();

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();

    redirect(pathname);
  };

  return (
    <button
      type="reset"
      onClick={reset}
      dangerouslySetInnerHTML={{ __html: Icons.Times }}
    />
  );
};
