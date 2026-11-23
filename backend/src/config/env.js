/**
 * Central place to read environment variables.
 * Import `env` everywhere instead of touching process.env directly.
 */
export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 5000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",

  // Fixed login credentials (temporary, until a users database exists).
  authEmail: process.env.AUTH_EMAIL ?? "",
  authPassword: process.env.AUTH_PASSWORD ?? "",
};
