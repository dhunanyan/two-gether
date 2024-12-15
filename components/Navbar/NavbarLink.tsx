"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavbarLinkPropsType = {
  href: string;
  icon: string;
  regex: string;
};

export const NavbarLink = ({ href, icon, regex }: NavbarLinkPropsType) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        "navbar__link" +
        (pathname.includes(regex) ? " navbar__link--active" : "")
      }
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};
