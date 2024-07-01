import React, { useEffect, useState } from "react";
import FlightHeader from "../components/FlightHeader";
import axios from "axios";

const FlightHotelPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `${import.meta.env.VITE_API_BASE_URL}/v2/hotels/search`,
        params: {
          children_number: "2",
          locale: "en-gb",
          children_ages: "5,0",
          filter_by_currency: "AED",
          checkin_date: "2024-09-14",
          categories_filter_ids: "class::2,class::4,free_cancellation::1",
          dest_type: "city",
          dest_id: "-553173",
          adults_number: "2",
          checkout_date: "2024-09-15",
          order_by: "popularity",
          include_adjacency: "true",
          room_number: "1",
          page_number: "0",
          units: "metric",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setList(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative">
      <FlightHeader />

      <div className="bg-white p-1 -mt-8 relative z-10 mx-2 md:mx-4 lg:mx-8 xl:mx-16 2xl:mx-32 rounded-xl shadow-lg border-4 border-yellow-400">
        <form className="flex flex-col lg:flex-row items-center">
          <div className="flex m-2 rounded-lg  bg-[#80808024]">
            <div className="flex-1 lg:border-r-2 lg:border-gray-300 p-2">
              <label className="block text-sm text-gray-600 mb-1">
                Departure
              </label>
              <input
                type="text"
                name="departure"
                placeholder="City or airport"
                className="w-full text-sm focus:outline-none  bg-[#80808003]"
              />
            </div>
            <div className="flex-1 lg:border-r-2  lg:border-gray-300 p-3 ">
              <label className="block text-sm text-gray-600 mb-1">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                className="w-full text-sm focus:outline-none  bg-[#80808003] "
              />
            </div>
          </div>

          <div className="lg:w-1/5 lg:border-r-2 lg:border-gray-300 p-3 bg-[#80808024]">
            <label className="block text-sm text-gray-600 mb-1">
              Leaving on
            </label>
            <input
              type="text"
              name="departureDate"
              placeholder="Thu, 4 Jul"
              className="w-full text-sm focus:outline-none bg-[#80808003]"
            />
          </div>
          <div className="lg:w-1/5 lg:border-r-2 lg:border-gray-300 p-3 bg-[#80808024]">
            <label className="block text-sm text-gray-600 mb-1">
              Returning on
            </label>
            <input
              type="text"
              name="returnDate"
              placeholder="Sun, 7 Jul"
              className="w-full text-sm focus:outline-none bg-[#80808003]"
            />
          </div>
          <div className="lg:w-1/4 p-3 bg-[#80808024]">
            <label className="block text-sm text-gray-600 mb-1">
              Travellers and flight class
            </label>
            <input
              type="text"
              name="travellersAndClass"
              placeholder="2 travellers, 1 room, Any..."
              className="w-full text-sm focus:outline-none bg-[#80808003]"
            />
          </div>
          <div className="lg:w-1/12 p-4">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="relative">
        <div className="flex">
          <div className="flex flex-wrap gap-5 p-5 xl:ml-[9rem] mt-10">
            {list?.map((hotel) => (
              <div
                key={hotel.id}
                className="relative w-80 h-48 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={hotel.photoMainUrl}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-lg font-semibold">{hotel.name}</h2>
                  <span className="absolute bottom-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                    from ₹{" "}
                    {hotel.priceBreakdown?.grossPrice?.value.toFixed(0) ||
                      "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightHotelPage;
