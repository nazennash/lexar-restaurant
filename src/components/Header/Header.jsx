import React from "react";
import image from "../../assets/image3.jpg";

export const Header = () => {
  return (
    <div className="bg-gray-50">
      <div className="p-5 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between p-5 mx-auto mt-10 space-y-10 sm:space-y-0">
          <div className="sm:w-1/2 space-y-6 opacity-100 transition-all duration-700 ease-in-out delay-200">
            <h2 className="text-4xl font-bold mb-4 text-secondary">
              We provide the best food for you
            </h2>
            <p className="text-lg text-gray-600 mb-6 opacity-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              aliquet bibendum ligula, eu laoreet nulla tempor non. Nunc eget
              felis ante.
            </p>

            <div className="flex gap-4">
              <button
                className="bg-secondary text-white text-sm px-4 py-3 rounded-tl-xl rounded-br-xl shadow-xl transform transition duration-500 hover:bg-primary hover:text-white"
                aria-label="View Menu"
              >
                Menu
              </button>
              <button
                className="bg-primary text-white text-sm px-4 py-3 rounded-tl-xl rounded-br-xl shadow-xl transform transition duration-500 hover:bg-secondary hover:text-white"
                aria-label="Book a table"
              >
                Book a table
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:ml-10 transition-all duration-700 ease-in-out transform hover:rotate-3 hover:scale-105">
            <img
              src={image}
              alt="Restaurant"
              className="w-full h-60 md:h-96 object-cover rounded-xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
