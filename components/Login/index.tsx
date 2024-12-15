import * as React from "react";

import { redirect } from "next/navigation";
import Link from "next/link";

import { auth, signIn } from "@/auth";
import { Icons } from "@/config";

import "./Login.scss";

export const Login = async () => {
  const session = await auth();

  if (!!session) redirect("/browse/cafes");

  const triggerLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link
          className="login__go-back"
          href="/"
          dangerouslySetInnerHTML={{ __html: Icons.ArrowLeft }}
        />
        <div className="login__background-image">
          <img src="/images/splash.png" alt="Background" />
        </div>
        <div className="login__content">
          <h1 className="login__title">Log In to TwoGether</h1>
          <p className="login__description">
            Log in with GitHub to continue your shared journey of unforgettable
            memories. TwoGether makes it easy to track, rate, and relive your
            favorite date spots with your partner. Start exploring and creating
            moments that matter, together!
          </p>
          <form action={triggerLogin} className="login__form">
            <button>
              Login
              <span dangerouslySetInnerHTML={{ __html: Icons.GitHub }}></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
