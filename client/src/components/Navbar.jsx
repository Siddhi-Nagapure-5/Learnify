import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow">
            <div className="text-xl font-bold tracking-wide text-blue-400">
                Learnify
            </div>
            <div className="space-x-6">
                <Link to="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link>
                <Link to="/profile" className="hover:text-blue-300 transition">Profile</Link>
                <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 transition">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
