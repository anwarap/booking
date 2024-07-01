import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBars } from "@fortawesome/free-solid-svg-icons";
import { PiAirplaneInFlight } from "react-icons/pi";
import { MdOutlineTravelExplore, MdAttractions } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full pb-5 bg-[#003b95]">
      <div className="pt-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between w-full md:w-auto items-center">
          <h1 className="font-bold text-2xl md:text-xl lg:text-2xl p-2 text-white tracking-tight text-left xl:text-left max-w-xl md:mr-auto lg:mr-0 xl:ml-[8rem]">
            Booking.com
          </h1>
          <button className="md:hidden text-white " onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row text-white items-center  space-y-2 md:space-y-0 md:space-x-4 xl:mr-[9rem]">
            <li>
              <button className="font-sans font-medium">INR</button>
            </li>
            <li>
              <button className="font-sans font-medium ">
                <img
                  src="/public/flag.png"
                  className="mt-2 h-5  rounded-full"
                />
              </button>
            </li>
            <li>
              <button className="font-sans font-medium">
                <MdOutlineContactSupport className="mt-2 w-5" />
              </button>
            </li>
            <li>
              <button className="font-sans font-medium">
                List your property
              </button>
            </li>
            <li>
              <button className="bg-white text-blue-600 px-4 py-1 rounded-sm font-semibold hover:bg-gray-200 w-full md:w-auto">
                Register
              </button>
            </li>
            <li>
              <button className="bg-white text-blue-600 px-4 py-1 rounded-sm font-semibold hover:bg-gray-200 w-full md:w-auto">
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-4 px-4 md:px-8 xl:px-48 lg:px-16 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-2 md:gap-5 items-center justify-start min-w-max">
          {[
            { icon: <IoBedOutline />, text: "Stays" },
            { icon: <PiAirplaneInFlight />, text: "Flight" },
            {
              icon: <MdOutlineTravelExplore />,
              link: "/flight-hotel",
              text: "Flight + Hotel",
            },
            { icon: <FontAwesomeIcon icon={faCar} />, text: "Car rentals" },
            { icon: <MdAttractions />, text: "Attractions" },
            { icon: <MdOutlineTravelExplore />, text: "Airport Taxis" },
          ].map((item, index) => (
            <li key={index}>
              {index === 0 ? (
                <button className="bg-transparent text-white border border-white px-2 md:px-4 py-1 rounded-full font-sans hover:bg-white/10 transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ) : (
                <button className="bg-transparent text-white  px-2 md:px-4 py-1 rounded-full font-sans hover:bg-white/10 transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                  {item.icon}
                  <Link to={item?.link}>
                    <span>{item.text}</span>
                  </Link>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
