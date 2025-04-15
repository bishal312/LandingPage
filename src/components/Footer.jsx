import React from "react";
import rightArrow from "../assets/Right2.svg";
import logo from "../assets/Logo2.svg";
import ic1 from "../assets/SocialIcons.svg";
import ic2 from "../assets/SocialIcons2.svg";
import ic3 from "../assets/SocialIcons3.svg";
import ic4 from "../assets/SocialIcons4.svg";
import send from "../assets/send.svg";

const Footer = () => {
  return (
    <div className="bg-white h-auto flex-col justify-center items-center">
      <div className="bg-gray-50 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-5 py-5 w-full m-auto">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl w-1/2 font-bold">
              Pellentesque suscript fringilla libero eu.
            </h1>
            <button className="flex justify-center items-center w-[200px] bg-green-600 text-white px-5 py-2 rounded-sm mt-2">
              Get a Demo
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black/90 text-white w-full px-5">
        <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-5 py-5 w-full m-auto">
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start">
            <img src={logo} alt="logo" className="mb-4" />
            <p className="text-center md:text-left text-sm mt-2">
              © 2025 All rights reserved
            </p>
            <div className="flex justify-center md:justify-start mt-2">
              <img src={ic1} alt="icon" className="w-5 h-5 mx-2" />
              <img src={ic2} alt="icon" className="w-5 h-5 mx-2" />
              <img src={ic3} alt="icon" className="w-5 h-5 mx-2" />
              <img src={ic4} alt="icon" className="w-5 h-5 mx-2" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-15 w-full md:w-3/4">
            <div className="flex flex-col flex-wrap w-full md:w-1/4 justify-center items-center md:items-start gap-2">
              <h1 className="text-xl font-bold">Company</h1>
              <a className="text-sm" href="#aboutus">
                About{" "}
              </a>
              <a className="text-sm" href="#aboutus">
                Blog
              </a>
              <a className="text-sm" href="#aboutus">
                Contact us
              </a>
              <a className="text-sm" href="#aboutus">
                Pricing
              </a>
              <a className="text-sm" href="#aboutus">
                Testimonials
              </a>
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/4 items-center md:items-start gap-2">
              <h1 className="text-xl font-bold">Support</h1>
              <a className="text-sm" href="#aboutus">
                Help center{" "}
              </a>
              <a className="text-sm" href="#terms">
                Terms of Service
              </a>
              <a className="text-sm" href="#legal">
                Legal
              </a>
              <a className="text-sm" href="#privacypolicy">
                Privacy policy
              </a>
              <a className="text-sm" href="#status">
                Status
              </a>
            </div>
          </div>
          <div className="h- flex flex-col w-full md:w-1/4 items-center md:items-start gap-2">
            <h1 className="text-xl font-bold">Stay up to date</h1>
            <div className="relative text-center md:text-left w-full max-w-xs">
              <input
                className="w-2/3 md:w-15/16 bg-white/10 py-2 px-4 rounded-sm text-sm placeholder:text-gray-500 focus:outline-none"
                type="email"
                placeholder="your email address"
              ></input>
              <button className="absolute right-15 top-1/3 md:right-1 px-3 hover:scale-y-50 transition-all duration-300 ease-in-out">
                <img src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
