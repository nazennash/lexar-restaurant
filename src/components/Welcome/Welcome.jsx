import React from "react";
import image from "../../assets/image3.jpg";

export const Welcome = () => {
  return (
    <div className="flex items-center justify-between p-5 max-w-7xl mx-auto mt-10">
      <div className="w-1/2">
        <img
          src={image}
          alt="Restaurant"
          className="w-full h-full lg:h-96 lg:w-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Restaurant</h2>
        <p className=" mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          bibendum ligula, eu laoreet nulla tempor non. Nunc eget felis ante.
        </p>

        <div className="flex gap-4">
          <button
            className="bg-primary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
            aria-label="Book a table"
          >
            View Menu
          </button>
          <button
            className="bg-primary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
            aria-label="Book a table"
          >
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
};
