
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => navigate("/login"), 3500);
      return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="text-5xl font-extrabold tracking-wide mb-4"
            >
                PathCraft 🚀
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg text-gray-300"
            >
                Your AI-Powered Learning Path Companion
            </motion.div>
        </div>
    );
};

export default SplashScreen;
