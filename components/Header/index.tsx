import * as React from "react";
import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";
import { Icons } from "@/config";

import "./Header.scss";

export const Header = async () => {
  const session = await auth();

  const triggerLogin = async () => {
    "use server";
    await signIn("github");
  };

  const triggerLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  const profileImage = {
    src: session?.user?.image || "",
    alt: session?.user?.name || "",
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link
          href="/"
          className="header__logo"
          dangerouslySetInnerHTML={{ __html: Icons.Logo }}
        />

        <div className="header__links">
          {session && session.user ? (
            <>
              <Link
                href="/startup/create"
                className="header__link"
                dangerouslySetInnerHTML={{ __html: Icons.SquarePlus }}
              />
              <form action={triggerLogout} className="header__link">
                <button dangerouslySetInnerHTML={{ __html: Icons.Logout }} />
              </form>
              <Link href={`/user/${session?.id}`} className="header__avatar">
                <img src={profileImage.src} alt={profileImage.alt} />
                <span>AV</span>
              </Link>
            </>
          ) : (
            <>
              <form action={triggerLogin} className="header__link">
                <button dangerouslySetInnerHTML={{ __html: Icons.Login }} />
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
