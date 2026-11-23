import { Router } from "express";
import healthRoutes from "./health.routes.js";

/** Mount every feature router here, e.g. router.use("/courses", courseRoutes). */
const router = Router();

router.use("/health", healthRoutes);

export default router;
