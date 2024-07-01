import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Carousel3 from "../components/Carousel3";
import Cards from "../components/Cards";
import Carosal4 from "../components/Carosal4";
import Carosal5 from "../components/Carosal5";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <section className="relative">
      <Header />
      <div className="relative">
        <img
          src="/public/bookingCover.jpeg"
          alt="Booking Cover"
          className=" w-full h-[50vh] object-cover z-10 bg-black lg:pl-20 lg:pr-20"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center  p-4 md:p-2 lg:p-2">
          <div className="flex flex-col text-left xl:text-left max-w-xl ml-0 xl:ml-52">
            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-2">
              The perfect home base
            </h1>
            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4">
              for your special trip
            </h1>
            <h2 className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4">
              Discover dreamy holiday homes all over the world
            </h2>
            <div>
              <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-7  ">
                Find yours
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffb700] p-1 md:p-1 lg:p-1 -mt-8 relative z-10 mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 rounded-lg shadow-lg">
        <form className="flex flex-col lg:flex-row gap-1">
          <div className="flex-1">
            <input
              type="text"
              name="place"
              placeholder="Where are you going?"
              className="bg-white border border-yellow-300 text-gray-900 text-sm rounded-md w-full h-14 p-2.5"
            />
          </div>
          <div className="lg:w-1/4">
            <input
              type="date"
              name="calander"
              placeholder="Check-in - Check-out"
              className="bg-white border border-yellow-300 text-gray-900 text-sm rounded-md w-full h-14 p-2.5"
            />
          </div>
          <div className="lg:w-1/4">
            <input
              type="number"
              name="personsCount"
              placeholder="2 adults, 0 children, 1 room"
              className="bg-white border border-yellow-300 text-gray-900 text-sm rounded-md w-full h-14 p-2.5"
            />
          </div>
          <div className="lg:w-1/12">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full h-14 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-row gap-3  mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-3   ">
        <div className="flex-1/3  items-center space-x-2 ">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />

          <label for="checkbox" className="text-gray-700 h-100">
            Show me holiday homes and apartments
          </label>
        </div>
        <div className="flex-1 items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />

          <label for="checkbox" className="text-gray-700">
            I'm looking for flights
          </label>
        </div>
      </div>

      {/* <div className=" mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-5">
        <h1 className="text-black font-sans font-bold text-2xl ">
          Your recent searches
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-5">
        <div className="w-96 flex border rounded-lg ">
          <div className="p-4  ">
            <img src="\public\hills.jpg" className="rounded-md"></img>
          </div>
          <div className="p-3 pt-6 ">
            <h4 className="font-sans font-bold text-gray-700">Munnar</h4>
            <h4 className="text-gray-700">29 jun-30 jun,2 people </h4>
          </div>
        </div>
      </div> */}

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Still interested in these properties?
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-3 ">
        <Cards />
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">Offers</h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-2 ">
        <h2 className=" font-sans  text-md text-gray-800">
          Promotions,details and special offer for you{" "}
        </h2>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-2">
        <Carousel />
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Browse by property type
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-3 ">
        <Carosal4 />
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-5 ">
        <div className=" flex border rounded-lg">
          <div className="w-[18%] p-3 ">
            <img
              src="\public\GlobeGeniusBadge.png"
              className="rounded-md"
            ></img>
          </div>
          <div>
            <h1 className="text-black font-sans font-bold text-2xl pt-5 pb-1">
              Get instant discount
            </h1>
            <h2 className="text-gray-700">
              Simply sign into your Booking.com account and look for the blue
              Genius logo and save
            </h2>
            <h2 className="text-gray-700 mb-5"> blue Genius logo and save</h2>

            <button className="p-2 border text-blue-600 border-blue-600 rounded-md ">
              Sign in{" "}
            </button>
            <span className="p-4 text-blue-600">Register</span>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Get inspiration for your next trip
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-4">
        <Carousel3 />
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Stay at our top unique properties
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-2 ">
        <h2 className=" font-sans  text-md text-gray-800">
          From castles and villas to boats and igloos, we've got it all
        </h2>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-4">
        <Carousel2 />
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-start border border-grey rounded-lg p-2 ">
            <img
              src="/public/note.png"
              className="w-16 h-16 object-contain m-1"
            />
            <div className="p-3">
              <h1 className="text-md font-bold">
                Book now, pay at the property
              </h1>
              <h2 className="text-sm text-gray-600">
                FREE cancellation on most rooms
              </h2>
            </div>
          </div>
          <div className="flex-1 flex items-start border border-grey rounded-lg">
            <img
              src="/public/GlobeGeniusBadge.png"
              className="w-16 h-16 object-contain mr-1 pt-3"
            />
            <div className="p-3">
              <h1 className="text-md font-bold">
                2+ million properties worldwide
              </h1>
              <h2 className="text-sm text-gray-600">
                Hotels, guest houses, apartments and more...
              </h2>
            </div>
          </div>
          <div className="flex-1 flex items-start border border-grey rounded-lg">
            <img
              src="/public/girl.png"
              alt="Girl"
              className="w-16 h-16 object-contain mr-1 pt-4"
            />
            <div className="p-3">
              <h1 className="text-md font-bold">
                Trusted customer service you can rely on 24/7
              </h1>
              <h2 className="text-sm text-gray-600">
                We're always here to help
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Trending destinations
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-2 ">
        <h2 className=" font-sans  text-md text-gray-800">
          Most popular choices for traverllers from India
        </h2>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-4">
        <div className="flex flex-row gap-4">
          <div className="relative flex-1 ">
            <img
              src="\public\delhi.jpg"
              alt="delhi"
              className=" w-full h-64 border rounded-md object-cover "
            />
            <div className="absolute top-5 left-3 flex gap-1 ">
              <h1 className="text-2xl font-bold text-white">New Delhi</h1>
              <img src="public\india.png" className="h-7 m-1" />
            </div>
          </div>

          <div className="relative flex-1">
            <img
              src="\public\bangloure.jpg"
              alt="bangolure"
              className=" w-full h-64 border rounded-md object-cover "
            />
            <div className="absolute top-5 left-3 flex ">
              <h1 className="text-2xl font-bold text-white">Bangulure</h1>
              <img src="public\india.png" className="h-6 m-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-4">
        <div className="flex flex-row gap-3">
          <div className="relative flex-1">
            <img
              src="\public\mumbai.jpg"
              alt="mumbai"
              className=" w-full h-64 border rounded-md object-cover "
            />
            <div className="absolute top-5 left-3 flex">
              <h1 className="text-2xl font-bold text-white">Mumbai</h1>
              <img src="public\india.png" className="h-7 m-1 " />
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="\public\chennai.jpg"
              alt="chennai"
              className=" w-full h-64 border rounded-md object-cover "
            />
            <div className="absolute top-5 left-3 flex">
              <h1 className="text-2xl font-bold text-white">Chennai</h1>
              <img src="public\india.png" className="h-7 m-1 " />
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="\public\hydrabhad.jpg"
              alt="hyderbhad"
              className=" w-full h-64 border rounded-md object-cover "
            />
            <div className="absolute top-5 left-3 flex">
              <h1 className="text-2xl font-bold text-white">Hyderbhad</h1>
              <img src="public\india.png" className="h-7 m-1 " />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-7 ">
        <h1 className="text-black font-sans font-bold text-2xl">
          Home guests love
        </h1>
      </div>

      <div className="mx-2 md:mx-2 lg:mx-4 xl:mx-28 2xl:mx-56 mt-3 ">
        <Carosal5 />
      </div>

      <div className="pt-6">
        <Footer />
      </div>
    </section>
  );
};

export default HomeScreen;
