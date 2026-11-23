import { asyncHandler } from "../utils/asyncHandler.js";

export const getHealth = asyncHandler(async (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
