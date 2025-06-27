// 📁 client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api";


const Dashboard = () => {
    const navigate = useNavigate();
    const [goal, setGoal] = useState("");
    const [duration, setDuration] = useState("");
    const [roadmap, setRoadmap] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGenerate = async () => {
        setLoading(true);
        setRoadmap("");
        setError("");
        try {
            const { data } = await API.post("/roadmap/generate", {
                goal,
                duration,
            });
            setRoadmap(data.roadmapContent);
        } catch (err) {
            console.error("Error generating roadmap:", err);
            setError(err.response?.data?.error || "❌ Failed to generate roadmap.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 py-8 flex flex-col justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Welcome to Learnify 🚀</h2>

                {/* Glassmorphic Input Section */}
                <div className="bg-white/10 backdrop-blur-md shadow-xl border border-white/20 p-8 rounded-2xl max-w-2xl mx-auto w-full mt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400">🎯 Create Your Learning Path</h3>

                    <input
                        type="text"
                        placeholder="Your goal (e.g., Become Full-Stack Developer)"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Duration (e.g., 3 months)"
                        className="w-full p-3 mb-6 rounded-lg bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all py-2 rounded-lg font-semibold text-white tracking-wide disabled:opacity-50"
                    >
                        {loading ? "Generating..." : "🚀 Generate Roadmap"}
                    </button>
                </div>


                {loading && (
                    <div className="text-yellow-400 font-semibold text-center mt-6 animate-pulse">
                        ⏳ Generating roadmap using GPT...
                    </div>
                )}

                {error && (
                    <div className="text-red-500 text-center mt-6">
                        {error}
                    </div>
                )}

                {roadmap && (
                    <div
                        id="roadmapResult"
                        className="mt-10 animate-fade-in-down bg-gradient-to-br from-gray-800/60 to-gray-900/70 border border-gray-700 p-6 rounded-2xl max-w-2xl mx-auto text-white shadow-md backdrop-blur-lg"
                    >
                        <h4 className="text-2xl font-bold text-green-400 mb-4">🧠 Suggested Roadmap</h4>
                        <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base text-gray-200">{roadmap}</p>

                        
                    </div>
                )}

                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
