import React from "react";

const Cards = () => {
  const card = [
    {
      title: " Casa Rural La Marquesa Cuena",
      location: "Spain, Valera de Abajo ",
      rating: 9.6,
      reviews: 144,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=",
    },
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
  ];
  return (
    <div className="relative ">
      <div className="flex">
        {card.map((item, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 px-2 ">
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
  );
};

export default Cards;
