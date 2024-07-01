import React from "react";
import FlightHeaderTop from "./FlightHeaderTop";

const FlightHeader = () => {
  return (
    <section>
      <FlightHeaderTop />
      <div className="w-full bg-[#003b95] ">
        <div className="flex justify-between md:w-auto items-center ">
          <div className="pt-4 mb-20">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl p-2 text-white tracking-tight text-left xl:text-left max-w-3xl md:mr-auto lg:mr-0 xl:ml-[4rem]">
              Your entire holiday in one click
            </h1>
            <h2 className="font-semibold text-xl md:text-xl lg:text-xl p-2 text-white tracking-tight text-left xl:text-left max-w-xl md:mr-auto lg:mr-0 xl:ml-[4rem]">
              Book Flight + Hotel
            </h2>
          </div>

          <div className=" mb-20">
            <h1 className="font-bold text-3xl md:text-3xl lg:text-3xl p-2 text-white tracking-tight text-left xl:text-left max-w-3xl md:mr-auto lg:mr-0 xl:mr-[6rem]">
              Booking.com
            </h1>
            <div className="flex gap-3">
              <h6 className="text-sm text-gray-400 pl-2 pt-1"> powered by </h6>

              <h2 className="text-white rounded-sm text-sm bg-pink-500 p-1">
                lastminute.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightHeader;
