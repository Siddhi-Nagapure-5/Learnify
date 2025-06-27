
import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    goal: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    roadmapContent: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Roadmap = mongoose.model("Roadmap", roadmapSchema);
export default Roadmap;
