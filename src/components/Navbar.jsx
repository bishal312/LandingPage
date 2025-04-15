import React, { useState } from "react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white px-5 py-4 relative z-50 flex justify-center">
      <nav className="w-6xl flex justify-between items-center h-5 py-6 px-5 mx-auto">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="flex gap-4">
            <a href="#home" className="text-black">
              Home
            </a>
            <a href="#home" className="text-black">
              Features
            </a>
            <a href="#home" className="text-black">
              Community
            </a>
            <a href="#home" className="text-black">
              Blog
            </a>
            <a href="#home" className="text-black">
              Pricing
            </a>
          </li>
          <button className="bg-green-600 text-white px-5 py-2 rounded-sm">
            Regeister
          </button>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`md:hidden absolute py-2 top-[100%] bg-amber-50 left-0 w-full flex flex-col items-center shadow-md z-40 text-black gap-4 px-4 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <a href="#home">Home</a>
        <a href="#home">Features</a>
        <a href="#home">Community</a>
        <a href="#home">Blog</a>
        <a href="#home">Pricing</a>
        <button className="bg-green-600 text-white px-5 py-2 rounded-sm mt-2">
          Regeister
        </button>
      </div>
    </div>
  );
};

export default Navbar;
