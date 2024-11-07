import React from "react";
import image from "../../assets/image3.jpg";

export const Dishes = () => {
  return (
    <div className="p-5">
      <div className="text-center space-y-4">
        <p className="text-3xl font-bold">Our Special Dishes</p>
        <p className="max-w-sm mx-auto text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          voluptatibus sequi perferendis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 mt-20 max-w-5xl mx-auto">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative p-5 pt-16 text-center shadow-md bg-white rounded-bl-lg rounded-tr-lg rounded-br-xl"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={image}
                alt="Special Dish"
                className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
              />
            </div>
            <p className="font-semibold mt-8">Lorem ipsum</p>
            <p className="max-w-xs mx-auto">
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
