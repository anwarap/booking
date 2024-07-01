import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const FlightHeaderTop = () => {
  return (
    <div
      className="w-full p-3 bg-[#003b95] relative"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="flex justify-between md:w-auto items-center">
        <div className="flex items-center">
          <h2 className="font-bold text-lg md:text-lg lg:text-lg p-1 text-white tracking-tight text-left xl:text-left">
            Booking.com
          </h2>
          <div className="border-l border-gray-400 h-9 mx-1 mr-1"></div>
          <div className="space-y-0.5">
            <h6 className="text-[10px] text-gray-400 pt-0.5">powered by</h6>
            <h6 className="text-[10px] text-white rounded-sm bg-pink-500 px-1 py-0.5">
              lastminute.com
            </h6>
          </div>
        </div>
        <div className="flex gap-3 mr-10">
          <FaGlobe className="text-white text-lg mr-6" />
          <FaUserCircle className="text-white mr-8 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default FlightHeaderTop;
