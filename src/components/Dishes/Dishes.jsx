import React from "react";
import image from "../../assets/image3.jpg";

export const Dishes = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-5 container mx-auto">
        <div className="mt-10">
          <div className="text-center space-y-4">
            <p className="text-3xl font-bold text-primary">
              Our Special Dishes
            </p>
            <p className="max-w-sm mx-auto text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              voluptatibus sequi perferendis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 mt-20 max-w-5xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="relative p-5 pt-16 text-center shadow-lg bg-white rounded-bl-lg rounded-tr-lg rounded-br-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-secondary hover:text-white opacity-90 hover:opacity-100"
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={image}
                    alt="Special Dish"
                    className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <p className="font-semibold mt-8 text-lg text-primary transition-colors duration-300 ease-in-out hover:text-white">
                  Lorem ipsum
                </p>
                <p className="max-w-xs mx-auto text-gray-600 transition-colors duration-300 ease-in-out hover:text-white">
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
