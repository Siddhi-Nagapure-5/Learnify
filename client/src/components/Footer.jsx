
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4 text-center mt-12">
            <p>
                © {new Date().getFullYear()} <span className="text-white font-semibold">Learnify</span>. All rights reserved.
            </p>
            <p className="text-sm mt-1">Made by @Siddhi Nagapure</p>
        </footer>
    );
};

export default Footer;
