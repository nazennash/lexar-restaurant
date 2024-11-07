import React, { useState, useEffect } from "react";
import image from "../../assets/image3.jpg";

const clients = [
  {
    name: "Client 1",
    testimonial: "Great service and delicious food!",
    rating: 5,
  },
  {
    name: "Client 2",
    testimonial: "Loved the atmosphere, will come again!",
    rating: 4,
  },
  {
    name: "Client 3",
    testimonial: "Amazing experience, highly recommend!",
    rating: 5,
  },
  {
    name: "Client 4",
    testimonial: "Fantastic food, great value for money!",
    rating: 4,
  },
];

export const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5">
      <div className="text-center space-y-4">
        <p className="text-3xl font-bold">Our Happy Clients</p>
        <p className="max-w-sm mx-auto text-sm">
          See what our happy clients have to say about our services.
        </p>
      </div>

      <div className="relative mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-20">
          {clients
            .slice(currentIndex, currentIndex + 2)
            .map((client, index) => (
              <div
                key={index}
                className="relative p-5 pt-16 text-center shadow-md bg-white rounded-bl-lg rounded-tr-lg rounded-br-xl"
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={image}
                    alt="Happy Client"
                    className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <p className="font-semibold mt-8">{client.name}</p>
                <p className="max-w-xs mx-auto">{client.testimonial}</p>
                <div className="mt-4">
                  {Array.from({ length: client.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-gray-500 cursor-pointer">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 2 + clients.length) % clients.length
              )
            }
          >
            &#60;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-gray-500 cursor-pointer">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 2) % clients.length)
            }
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};
