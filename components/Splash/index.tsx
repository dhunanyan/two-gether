import * as React from "react";

import "./Splash.scss";
import Link from "next/link";

export const Splash = () => (
  <section className="splash">
    <div className="splash__container">
      <div className="splash__background-image">
        <img src="/images/splash.png" alt="Background" />
      </div>
      <div className="splash__content">
        <h1 className="splash__title">
          TwoGether: Your Shared Journey, Rediscovered
        </h1>
        <p className="splash__description">
          Celebrate your love story with TwoGether! Seamlessly track, rate, and
          relive your favorite date spots while discovering new adventures to
          cherish. From cozy cafes to scenic getaways, create a shared journey
          of unforgettable memories. Two hearts, one app, countless moments to
          treasure.
        </p>
        <Link href="/login" className="splash__button">
          Get Started
        </Link>
      </div>
    </div>
  </section>
);
