import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carosal4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Hotels",
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    },
    {
      title: "Apartments",
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    },
    {
      title: "Resorts",
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    },
    {
      title: "Villas",
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    },
    {
      title: "Cabins",
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
    },
    {
      title: "Cottages",
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
    },
    {
      title: "Glamping Sites ",
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
    },
    {
      title: "Serviced Apartments ",
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (currentSlide == 4 ? 0 : prev + 1));
  };

  const preSlide = () => {
    setCurrentSlide((prev) => (currentSlide == 0 ? 4 : prev - 1));
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
                  <div className="mt-3 ">
                    <h1 className="font-bold">{item.title}</h1>
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

export default Carosal4;
