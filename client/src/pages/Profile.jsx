// 📁 client/src/pages/Profile.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import API from '../api'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [savedRoadmaps, setSavedRoadmaps] = useState([]);

    useEffect(() => {
        const fetchRoadmaps = async () => {
            try {
                const { data } = await API.get("/roadmap/my-roadmaps");
                setSavedRoadmaps(data);
            } catch (err) {
                console.error("Error fetching saved roadmaps", err);
            }
        };
        fetchRoadmaps();
    }, []);
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 py-8 flex flex-col justify-between">
                <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">👤 Profile Overview</h2>

                    <div className="mb-4 text-sm sm:text-base">
                        <p><span className="font-semibold text-blue-400">Name:</span> {user?.name || "Anonymous"}</p>
                        <p><span className="font-semibold text-blue-400">Email:</span> {user?.email || "Not Available"}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">📌 Saved Roadmaps</h3>
                        <p className="text-sm text-gray-400">{savedRoadmaps.length > 0 ? (
                            <ul className="mt-2 space-y-2 text-sm text-gray-300">
                                {savedRoadmaps.map((r) => (
                                    <li key={r._id} className="border-b border-gray-600 pb-2">
                                        <strong>🎯 {r.goal}</strong> – {r.duration}
                                        <pre className="bg-gray-700 p-2 mt-1 rounded text-xs whitespace-pre-wrap">{r.roadmapContent}</pre>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-400">(No saved roadmaps yet.)</p>
                        )}
</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Profile;
