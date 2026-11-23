import { ApiError } from "../utils/ApiError.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Rejects the request early if email/password are missing or malformed. */
export const validateLogin = (req, res, next) => {
  const { email, password } = req.body ?? {};

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return next(new ApiError(400, "Please enter a valid email address."));
  }
  if (typeof password !== "string" || password.length === 0) {
    return next(new ApiError(400, "Please enter your password."));
  }

  req.body.email = email.trim().toLowerCase();
  next();
};
