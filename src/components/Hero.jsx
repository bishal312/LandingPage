import React from "react";
import logo from "../assets/Illustrations.svg";

const Hero = () => {
  return (
    <div className="bg-gray-100 h-[50vh] flex justify-between px-5 items-center">
      <div className="flex justify-between px-5 items-center gap-10 w-6xl m-auto">
        <div>
          <h1 className="text-black text-5xl font-bold text-left">
            Lessons and insights{" "}
            <span className="text-green-600">
              <br />
              from 8 years
            </span>
          </h1>
          <p className="text-sm text-left mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <br />
          <button className="bg-green-600 text-white px-4 py-2 rounded mt-6">
            Register
          </button>
        </div>
        <div>
          <img className="hidden md:flex" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
