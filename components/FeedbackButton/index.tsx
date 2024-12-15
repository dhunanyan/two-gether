"use client";
import * as React from "react";
import * as Sentry from "@sentry/browser";

export const FeedbackButton = () => {
  const triggerFeedbackAction = () => {
    const eventId = Sentry.captureMessage("User Feedback");
    // OR: const eventId = Sentry.lastEventId();

    const userFeedback = {
      name: "John Doe",
      email: "john@doe.com",
      message: "I really like your App, thanks!",
      associatedEventId: eventId,
    };
    Sentry.captureFeedback(userFeedback);
  };

  return (
    <button onClick={triggerFeedbackAction} className="header__link">
      Test
    </button>
  );
};
