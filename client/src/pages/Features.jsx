// 📁 client/src/pages/Features.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 py-8 flex flex-col justify-between">
                <section className="w-full max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">✨ How It Works</h2>
                    <ol className="list-decimal list-inside space-y-3 mb-10 text-sm sm:text-base">
                        <li>Login or Register on PathCraft</li>
                        <li>Enter your goal and target duration</li>
                        <li>AI generates a smart weekly roadmap</li>
                        <li>Use it, track progress, and save it to profile</li>
                    </ol>

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">🚀 Key Features</h2>
                    <ul className="list-disc list-inside space-y-3 text-sm sm:text-base">
                        <li>GPT-Powered learning roadmap suggestions</li>
                        <li>Personalized planning based on goals & time</li>
                        <li>Clean UI with real-time user stats</li>
                        <li>Option to export roadmap or take quiz (coming soon)</li>
                    </ul>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Features;
