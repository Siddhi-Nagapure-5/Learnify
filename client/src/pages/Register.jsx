// 📁 client/src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import API from "../api";
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/auth/register", formData);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/dashboard");
        } catch (err) {
            alert("Registration failed!");
            console.error(err);
        }
      };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-white px-4 sm:px-6 md:px-10 py-8">
            <div className="flex justify-center items-center flex-grow">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-gray-800 rounded shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Register on Learnify</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
                        onChange={handleChange}
                        required
                    />
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
                        className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded font-semibold"
                    >
                        Register
                    </button>
                    <p className="mt-4 text-sm text-center">
                        Already have an account? <span onClick={() => navigate("/login")} className="text-blue-400 cursor-pointer hover:underline">Login</span>
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
