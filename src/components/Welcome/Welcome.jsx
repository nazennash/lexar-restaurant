import React from "react";
import image from "../../assets/image3.jpg";

export const Welcome = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-5 container mx-auto">
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between p-5 mx-auto mt-10 space-y-10 sm:space-y-0">
            <div className="w-full sm:w-1/2 relative group">
              <img
                src={image}
                alt="Restaurant"
                className="w-full h-60 md:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>
            </div>
            <div className="sm:w-1/2 sm:ml-20 space-y-6 opacity-100 transition-all duration-700 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-4">
              <h2 className="text-4xl font-bold text-secondary mb-4 transition-colors duration-500 group-hover:text-primary hover:transition-colors hover:duration-500 hover:text-primary">
                Welcome to Our Restaurant
              </h2>
              <p className="text-lg text-secondary mb-6 opacity-100 transition-opacity duration-500 group-hover:opacity-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                aliquet bibendum ligula, eu laoreet nulla tempor non. Nunc eget
                felis ante.
              </p>

              <div className="flex gap-4">
                <button
                  className="bg-primary text-white text-sm px-4 py-3 rounded-tl-xl rounded-br-xl shadow-md transform transition duration-300 hover:bg-secondary hover:scale-105"
                  aria-label="View Menu"
                >
                  Menu
                </button>
                <button
                  className="bg-secondary text-white text-sm px-4 py-3 rounded-tl-xl rounded-br-xl shadow-md transform transition duration-300 hover:bg-primary hover:scale-105"
                  aria-label="Book a table"
                >
                  Book a table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
