import React from "react";
import logo1 from "../assets/OurClientImg/Logo1.svg";
import logo2 from "../assets/OurClientImg/Logo2.svg";
import logo3 from "../assets/OurClientImg/Logo3.svg";
import logo4 from "../assets/OurClientImg/Logo4.svg";
import logo5 from "../assets/OurClientImg/Logo5.svg";
import logo6 from "../assets/OurClientImg/Logo6.svg";
import logo7 from "../assets/OurClientImg/Logo7.svg";
import icon1 from "../assets/icons/Icon1.svg";
import Icon2 from "../assets/icons/Icon2.svg";
import icon3 from "../assets/icons/Icon3.svg";
import rafiki from "../assets/rafiki.svg";

const OurClients = () => {
  return (
    <div className="bg-white h-auto flex-col justify-center m-auto items-center px-5">
      <div className="xl:w-6xl text-center m-auto">
        <h1 className="text-2xl font-bold text-center mt-5">Our Clients</h1>
        <p className="text-sm text-center mt-3">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 mt-5">
          <a href="#ourclient">
            <img src={logo1} alt="logo1" />
          </a>
          <a href="#ourclient">
            <img src={logo2} alt="logo2" />
          </a>
          <a href="#ourclient">
            <img src={logo3} alt="logo3" />
          </a>
          <a href="#ourclient">
            <img src={logo4} alt="logo4" />
          </a>
          <a href="#ourclient">
            <img src={logo5} alt="logo5" />
          </a>
          <a href="#ourclient">
            <img src={logo6} alt="logo6" />
          </a>
          <a href="#ourclient">
            <img src={logo7} alt="logo7" />
          </a>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center mt-5">
            Manage your entire community
            <br />
            in a single system
          </h1>
          <p className="text-sm text-center mt-3">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-5">
          <div className="flex flex-col justify-center items-center md:w-1/4 w-1/2">
            <img src={icon1} alt="icon1" />
            <h1 className="font-bold text-2xl">
              Membership
              <br />
              Organisations
            </h1>
            <p className="text-sm text-center mt-3">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/4 w-1/2">
            <img src={Icon2} alt="icon2" />
            <h1 className="font-bold text-2xl">
              National
              <br />
              Associations
            </h1>
            <p className="text-sm text-center mt-3">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/4 w-1/2">
            <img src={icon3} alt="icon3" />
            <h1 className="font-bold text-2xl">
              Clubs And
              <br />
              Groups
            </h1>
            <p className="text-sm text-center mt-3">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row px-10 justify-center items-center mt-10 ">
          <img className="w-full md:w-1/2" src={rafiki} alt="rafiki" />
          <div className="py-5 px-5 text-center md:text-left md:w-full">
            <h1 className="text-2xl font-bold mt-5">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-sm mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              unde quisquam excepturi aspernatur beatae eligendi, maxime hic nam
              ducimus nulla ipsum accusamus molestias totam non?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Perspiciatis, quod.
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-sm mt-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
