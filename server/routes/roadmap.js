
import express from "express";
import { generateRoadmap } from "../controllers/generateRoadmapController.js";
const router = express.Router();

router.post("/generate", generateRoadmap);

export default router;
