import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FaRupeeSign } from "react-icons/fa";

const Carosal5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Gyttja Vastergards",
      location: "Finland, Lillandet",
      rating: 9.3,
      reviews: 192,
      price: 13072,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
    },
    {
      title: "Waldschenke Stendenitz ",
      location: "Germany, Neuruppin",
      rating: 8.7,
      reviews: 357,
      price: 19072,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/87429281.webp?k=6ba4f0190557519bcfef96a626037f73bef992019e568abde2a3d5b892bf7577&o=",
    },
    {
      title: " Casa Rural La Marquesa Cuena",
      location: "Spain, Valera de Abajo ",
      rating: 9.6,
      reviews: 144,
      price: 25999,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
    },
    {
      title: "Harbour View",
      location: "United Kingdom, Isle of Skye",
      rating: 9.2,
      reviews: 31,
      price: 12999,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/97644401.webp?k=22466a369409724fbe8048f538bc8f218f123494d43ebd449cb848b9b895a2cb&o=",
    },
    {
      title: "Harbour View",
      location: "United Kingdom, Isle of Skye",
      rating: 9.2,
      reviews: 31,
      price: 25555,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/564164054.webp?k=4af0c1162a89e574f3e72972e984c3919aa6689556d25be78861a947237df255&o=",
    },
    {
      title: "Harbour View",
      location: "United Kingdom, Isle of Skye",
      rating: 9.2,
      reviews: 31,
      price: 45554,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
    },
    {
      title: "Harbour View",
      location: "United Kingdom, Isle of Skye",
      rating: 9.2,
      reviews: 31,
      price: 35553,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (currentSlide == 3 ? 0 : prev + 1));
  };

  const preSlide = () => {
    setCurrentSlide((prev) => (currentSlide == 0 ? 3 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={preSlide}
          className="z-10 bg-white p-3 rounded-full shadow-md -mr-6"
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="overflow-hidden flex-grow">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {slides.map((item, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2">
                {console.log(currentSlide, "index")}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <div className="mt-2 flex items-center">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                        {item.rating}
                      </span>
                      <span className="ml-2 text-sm text-gray-600">
                        {item.rating >= 9.5 ? "Exceptional" : "Superb"} ·{" "}
                        {item.reviews} reviews
                      </span>
                    </div>
                    <h3 className="flex justify-end m-2">
                      Starting from
                      <h1 className="p-1 pt-1">
                        {" "}
                        <FaRupeeSign />
                      </h1>
                      <h1 className="font-bold">{item.price}</h1>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="z-10 bg-white p-3 rounded-full shadow-md -ml-6"
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carosal5;
