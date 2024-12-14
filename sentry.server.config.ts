import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://43e955b812d9cf97e5cd32ece06e4436@o4508450060304384.ingest.de.sentry.io/4508463847702608",
  tracesSampleRate: 1,
  debug: false,
});
