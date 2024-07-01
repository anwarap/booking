import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "New Year's Eve in New York City",
      description:
        "Ring in the new year with iconic moments and unforgettable memories in New York City",
      image:
        "https://cf.bstatic.com/xdata/images/xphoto/540x405/296361238.webp?k=5781de6463951b415b04e42ff2a5d23ad6bb1c5500f15c192212667573db4331&o=",
      large: true,
    },
    {
      title: "6 best ryokans in Japan to rejuvenate yourself",
      description: "Discover unmissable ryokans to relax and unwind in style.",
      image:
        "https://cf.bstatic.com/xdata/images/xphoto/720x405/292260574.webp?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o=",
    },
    {
      title: "7 best places in Asia to celebrate Christmas",
      description:
        "Discover the shimmering lights and festive sights of Asia's holiday season.",
      image:
        "https://cf.bstatic.com/xdata/images/xphoto/540x405/290483794.webp?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o=",
    },
    {
      title: "6 magical Chiristmas experience in London ",
      description: "A London Chirtmas: Cherishe traditions and new discoveries",
      image:
        "https://cf.bstatic.com/xdata/images/xphoto/540x405/289320924.webp?k=99a00f2907495aaeb6396695c053e3d8b95fb05619b10e76c89fb1f7d1fec427&o=",
    },
    {
      title: "top 5 places for winter sports in South Korea",
      description:
        "Ski Olympic slopes and jumps before relaxing in a traditional Korean bathhouse",
      image:
        "https://cf.bstatic.com/xdata/images/xphoto/540x405/288594543.webp?k=7a96a2b4190146f63068bd0604a916c0c885c4899a527e24a9b39487d4ae50b8&o=",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 2, slides.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="z-10 bg-white p-4 rounded-full shadow-md -mr-6"
            aria-label="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <div className="overflow-hidden flex-grow">
          <div
            className="flex gap-2 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  item.large ? "w-1/2  rounded-lg overflow-hidden " : "w-1/4"
                }`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent  p-4">
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentSlide < slides.length - 3 && (
          <button
            onClick={nextSlide}
            className="z-10 bg-white p-4 rounded-full shadow-md -ml-6"
            aria-label="Next slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel3;
