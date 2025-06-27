
import express from "express";
import { saveRoadmap, getUserRoadmaps } from "../controllers/roadmapController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save", protect, saveRoadmap);
router.get("/my-roadmaps", protect, getUserRoadmaps);

export default router;
