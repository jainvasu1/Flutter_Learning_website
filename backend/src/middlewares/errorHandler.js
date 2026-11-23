import { env } from "../config/env.js";

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;
  if (statusCode >= 500) console.error(err);

  res.status(statusCode).json({
    message: statusCode >= 500 && env.nodeEnv === "production" ? "Internal server error" : err.message,
  });
};
