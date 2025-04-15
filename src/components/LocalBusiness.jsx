import React from "react";
import icon1 from "../assets/LocalBusiness/Icon1.svg";
import icon2 from "../assets/LocalBusiness/Icon2.svg";
import icon3 from "../assets/LocalBusiness/Icon3.svg";
import icon4 from "../assets/LocalBusiness/Icon4.svg";
import pana from "../assets/pana.svg";
import img9 from "../assets/image9.svg";
import logo1 from "../assets/OurClientImg/Logo1.svg";
import logo2 from "../assets/OurClientImg/Logo2.svg";
import logo3 from "../assets/OurClientImg/Logo3.svg";
import logo4 from "../assets/OurClientImg/Logo4.svg";
import logo5 from "../assets/OurClientImg/Logo5.svg";
import logo6 from "../assets/OurClientImg/Logo6.svg";
import rightArrow from "../assets/Right.svg";
import img18 from "../assets/image18.png";
import img19 from "../assets/image19.png";
import img20 from "../assets/image20.png";

const LocalBusiness = () => {
  return (
    <div className="bg-white h-auto flex-col justify-center items-center">
      <div className="w-full bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-10 py-5 w-full m-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-5">
            <h1 className="text-2xl font-bold text-center md:text-left mt-5">
              Helping a local <br />
              <span className="text-green-600 text-center md:text-left">
                business reinvent itself
              </span>
            </h1>
            <p className="text-sm text-centre md:text-left">
              we reached here with our hard work and dedication
            </p>
          </div>
          <div className="w-full md:w-1/2 px-5 py-5 grid grid-cols-2 gap-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-5">
              <img width={50} height={50} src={icon1} alt="icon1" />
              <div>
                <h1 className="font-bold text-2xl">2,245,341</h1>
                <p className="text-sm ">Members</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <img width={50} height={50} src={icon2} alt="icon2" />
              <div>
                <h1 className="font-bold text-2xl">46,328</h1>
                <p className="text-sm">Clubs</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <img width={50} height={50} src={icon3} alt="icon3" />
              <div>
                <h1 className="font-bold text-2xl">828,867</h1>
                <p className="text-sm">Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <img width={50} height={50} src={icon4} alt="icon4" />
              <div>
                <h1 className="font-bold text-2xl">1926,436</h1>
                <p className="text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-5 py-5 w-full m-auto">
        <div className="w-full flex flex-col md:flex-row px-10 justify-center items-center mt-10 ">
          <img className="w-full md:w-1/2" src={pana} alt="pana" />
          <div className="py-5 px-5 items-center text-center md:text-left md:w-full">
            <h1 className="text-2xl font-bold text-center md:text-left mt-5">
              How to design your site footer like we did
            </h1>
            <p className="text-sm text-center md:text-left mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias, placeat officiis enim repudiandae, tempora ratione, soluta
              deserunt vero voluptates nemo perspiciatis? Fugit ratione fuga, ex
              harum sapiente perferendis esse natus, eligendi accusantium eaque
              sed! Similique eius iusto esse sit?
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-sm mt-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-5 py-5 w-full m-auto">
          <div className="w-full flex flex-col md:flex-row px-10 justify-center items-center mt-10 ">
            <img className="w-full md:w-1/2" src={img9} alt="image9" />
            <div className="px-5 items-center text-center md:text-left md:w-full">
              <p className="text-sm text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                alias, placeat officiis enim repudiandae, tempora ratione,
                soluta deserunt vero voluptates nemo perspiciatis? Fugit ratione
                fuga, ex harum sapiente perferendis esse natus, eligendi
                accusantium eaque sed! Similique eius iusto esse sit?
              </p>
              <h1 className="text-green-600 text-2xl font-bold text-center md:text-left mt-5">
                Tim Smith
              </h1>
              <p className="text-sm ">British Dragon Boat Racing Association</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 mt-5">
                <img src={logo1} alt="logo1" />
                <img src={logo2} alt="logo2" />
                <img src={logo3} alt="logo3" />
                <img src={logo4} alt="logo4" />
                <img src={logo5} alt="logo5" />
                <img src={logo6} alt="logo6" />
                <span className="text-xl font-bold text-center text-green-600">
                  Meet all customers
                </span>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 xl:w-6xl text-center px-5 py-5 w-full m-auto">
        <div className="w-full flex flex-col px-10 justify-center items-center mt-10 ">
          <h1 className="text-2xl font-bold">Caring is the new marketing</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            aperiam obcaecati eius vero, esse laborum assumenda accusamus
            aliquam doloremque doloribus porro modi ut qui impedit numquam eos
            excepturi officiis autem!
          </p>
          <div className="flex flex-wrap justify-center items-center gap-7 mt-5 px-5">
            <div className="relative text-center z-30">
              <img src={img18} alt="img 18" />
              <div className="flex flex-col absolute w-3/4 rounded-xl left-8  items-center bottom-[-10%] z-20 bg-gray-100 shadow-xl p-2">
                <h1 className="text-sm">
                  Creating streamlined safeguarding Processes with OneRen
                </h1>
                <button className="flex justify-center text-xl text-green-600">
                  Read More <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
            <div className="relative text-center z-30">
              <img src={img19} alt="img 19" />
              <div className="flex flex-col absolute w-3/4 rounded-xl left-8  items-center bottom-[-10%] z-20 bg-gray-100 shadow-xl p-2">
                <h1 className="text-sm">
                  What are you safegurding responsibilities and how can you
                  manage them?
                </h1>
                <button className="flex justify-center text-xl text-green-600">
                  Read More <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
            <div className="relative text-center z-30">
              <img src={img20} alt="img 20" />
              <div className="flex flex-col absolute w-3/4 rounded-xl left-8  items-center bottom-[-10%] z-20 bg-gray-100 shadow-xl p-2">
                <h1 className="text-sm">
                  Revamping the Membership Model with Triathlon Australia
                </h1>
                <button className="flex justify-center text-xl text-green-600">
                  Read More <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;
