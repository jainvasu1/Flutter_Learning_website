import { timingSafeEqual } from "node:crypto";
import { env } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";

/** Constant-time string compare, so response time does not leak how much matched. */
const safeEqual = (a, b) => {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
};

/**
 * Checks the credentials against the fixed email/password from .env.
 * Replace with a database lookup + hashed passwords when users are added.
 */
export const login = async (email, password) => {
  if (!env.authEmail || !env.authPassword) {
    throw new ApiError(500, "Login is not configured: set AUTH_EMAIL and AUTH_PASSWORD in backend/.env");
  }

  const emailOk = safeEqual(email, env.authEmail.toLowerCase());
  const passwordOk = safeEqual(password, env.authPassword);

  if (!emailOk || !passwordOk) {
    throw new ApiError(401, "Incorrect email or password.");
  }

  return { email: env.authEmail };
};
