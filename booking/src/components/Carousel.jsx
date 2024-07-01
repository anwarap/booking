import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Fly away to your dream holiday",
      description:
        "Get inspired, compare and book flights with more flexibility",
      buttonText: "Search for flights",
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=",
    },
    {
      title: "Planning a trip to the 2024 Summer Games?",
      description: "Brussels is a quick train ride from all the action",
      buttonText: "Explore Brussels",
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/500x500/320647664.png?k=698a838d781fe6952e506a3856a7fa5c22056d98e571eb3cf9e448afa98eba81&o=",
    },
    {
      title: "Seize the moment",
      description:
        "Save 15% or more when you book and stay before 1 October 2024",
      buttonText: "Find Getaway Deals",
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="z-10 bg-white p-2 rounded-full shadow-md -mr-6"
            aria-label="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <div className="overflow-hidden flex-grow">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 p-3">
                {index === slides.length - 1 ? (
                  <div className="relative h-full rounded-lg shadow-md overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6">
                      <h2 className="text-xl font-bold mb-2 text-white">
                        {slide.title}
                      </h2>
                      <p className="mb-4 text-sm text-white">
                        {slide.description}
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm self-start">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center bg-white rounded-lg shadow-md p-4">
                    <div className="flex-1 pr-4">
                      <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                      <p className="mb-4 text-sm">{slide.description}</p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                        {slide.buttonText}
                      </button>
                    </div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-1/4 h-auto object-contain "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {currentSlide < slides.length - 2 && (
          <button
            onClick={nextSlide}
            className="z-10 bg-white p-3 rounded-full shadow-md -ml-6"
            aria-label="Next slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
