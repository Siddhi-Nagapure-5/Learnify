// 📁 client/src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import API from "../api";
const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/auth/login", formData);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/dashboard");
        } catch (err) {
            alert("Login failed!");
            console.error(err);
        }
      };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-white px-4 sm:px-6 md:px-10 py-8">
            <div className="flex justify-center items-center flex-grow">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-gray-800 rounded shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Login to Learnify</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 rounded bg-gray-700 text-white placeholder-gray-400"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-semibold"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-sm text-center">
                        Don't have an account? <span onClick={() => navigate("/register")} className="text-blue-400 cursor-pointer hover:underline">Register</span>
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
