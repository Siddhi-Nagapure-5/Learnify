// 📁 server/controllers/generateRoadmapController.js
import { generateRoadmapFromGPT } from "../utils/generateRoadmapGPT.js";

export const generateRoadmap = async (req, res) => {
    const { goal, duration } = req.body;

    try {
        const roadmap = await generateRoadmapFromGPT(goal, duration);
        res.status(200).json({ roadmap });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
