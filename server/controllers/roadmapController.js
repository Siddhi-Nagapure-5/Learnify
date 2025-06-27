// 📁 server/controllers/roadmapController.js
import Roadmap from "../models/Roadmap.js";

export const saveRoadmap = async (req, res) => {
    const { goal, duration, roadmapContent } = req.body;

    try {
        const roadmap = await Roadmap.create({
            user: req.user._id,
            goal,
            duration,
            roadmapContent,
        });

        res.status(201).json(roadmap);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getUserRoadmaps = async (req, res) => {
    try {
        const roadmaps = await Roadmap.find({ user: req.user._id });
        res.json(roadmaps);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
