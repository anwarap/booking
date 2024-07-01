import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-[#003b95] ">
        <div className="flex flex-col md:w-auto items-center justify-center ">
          <div className="flex pt-4 mb-4 justify-center items-center">
            <button className="font-semibold text-sm  p-1 text-white border rounded-sm">
              List your Property
            </button>
          </div>
        </div>
        <div className="border-t border-white flex justify-center pt-3 pb-3">
          <ul className="flex gap-5 text-white underline  ">
            <li className="hover:bg-white/10 transition duration-300">
              Mobile version
            </li>
            <li className="hover:bg-white/10 transition duration-300">
              Your account
            </li>
            <li className="hover:bg-white/10 transition duration-300">
              Make changes to your booking online
            </li>
            <li className="hover:bg-white/10 transition duration-300">
              Customer Service help
            </li>
            <li className="hover:bg-white/10 transition duration-300">
              Become an affiliate
            </li>
            <li className="hover:bg-white/10 transition duration-300">
              Booking.com for Business
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-center ml-28 mr-28 mt-5">
        <div className="flex-1 text-blue-600 text-sm">
          <ul>
            <li>countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>District</li>
            <li>Arports</li>
            <li>Hotel</li>
            <li>Places of interest</li>
          </ul>
        </div>
        <div className="flex-1 text-blue-600 text-sm">
          <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>B&Bs</li>
            <li>Guest Houses</li>
          </ul>
        </div>
        <div className="flex-1 text-blue-600 text-sm">
          <ul>
            <li>Unique places to stay</li>
            <li>All destinations</li>
            <li>All flight destinations</li>
            <li>All car hire locations</li>
            <li>Reviews</li>
            <li>Discover montly stays</li>
            <li>Travel articles</li>
            <li>Seasonal and holiday deals</li>
            <li>Traveller review Awards</li>
          </ul>
        </div>
        <div className="flex-1 text-blue-600 text-sm">
          <ul>
            <li>Car hire</li>
            <li>Flight finder</li>
            <li>Restaurant reservations</li>
            <li>Booking.com for Travel Agents</li>
          </ul>
        </div>
        <div className="flex-1 text-blue-600 text-sm">
          <ul>
            <li>Coronavirus(COVID-19)FAQs</li>
            <li>About Booking.com</li>
            <li>Customer Service help</li>
            <li>Partner help</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press centre</li>
            <li>Safety resource centre</li>
            <li>investor relations</li>
            <li>Terms & conditions</li>
            <li>Partner dispute</li>
            <li>How we work</li>
            <li>Privacy & Cookie Statement</li>
            <li>Modern Slavery</li>
            <li>Human Rights Statement</li>
            <li>Corporate contact</li>
            <li>Content guidelines and reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
