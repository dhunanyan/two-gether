import * as React from "react";

import { auth } from "@/auth";
import { Icons } from "@/config";

import { NavbarLink, NavbarLinkPropsType } from "./NavbarLink";
import "./Navbar.scss";

export const Navbar = async () => {
  const session = await auth();

  const NavbarLinks: NavbarLinkPropsType[] = [
    {
      href: "/browse/cafes",
      icon: Icons.Cup,
      regex: "cafes",
    },
    {
      href: "/browse/restaurants",
      icon: Icons.Restaurant,
      regex: "restaurants",
    },
    {
      href: "/browse/startup/create",
      icon: Icons.CirclePlus,
      regex: "startup",
    },
    {
      href: `/browse/user/${session?.id}`,
      icon: Icons.Logo,
      regex: "user",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {NavbarLinks.map((item, i) => (
          <li key={i}>
            <NavbarLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
