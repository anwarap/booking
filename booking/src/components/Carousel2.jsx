import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Gyttja Vastergards",
      location: "Finland, Lillandet",
      rating: 9.3,
      reviews: 192,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=",
    },
    {
      title: "Waldschenke Stendenitz ",
      location: "Germany, Neuruppin",
      rating: 8.7,
      reviews: 357,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=",
    },
    {
      title: " Casa Rural La Marquesa Cuena",
      location: "Spain, Valera de Abajo ",
      rating: 9.6,
      reviews: 144,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=",
    },
    {
      title: "Harbour View",
      location: "United Kingdom, Isle of Skye",
      rating: 9.2,
      reviews: 31,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
    },
    {
      title: "Das rote Haus hinterm Deich",
      location: "Germany, Simonsberg",
      rating: 8.2,
      reviews: 202,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o=",
    },
    {
      title: "Carinya Park",
      location: "Australia, Gembrook",
      rating: 9.2,
      reviews: 31,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=",
    },
    {
      title: "May's Apartments by May's",
      location: "Norway, Reine",
      rating: 9.5,
      reviews: 851,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/398620320.webp?k=10e476830ecfd5a062072a6318612393bc414bd75c10bb44dd29a1d6de5b225b&o=",
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

export default Carousel2;
