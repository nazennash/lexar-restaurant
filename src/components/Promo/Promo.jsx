import React from "react";
import image from "../../assets/image3.jpg";

export const Promo = () => {
  return (
    <div>
      <div className="container mx-auto px-8 relative">
        <div className="hidden sm:block">
          <div className="w-full h-60 relative md:h-96">
            <img
              src={image}
              alt="Promo image"
              className="w-full h-full object-cover rounded-xl "
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <p className="text-3xl font-semibold mb-4">
              Get Promo Code by Subscribing to our newsletter
            </p>
            <form action="" className="flex justify-center items-center w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none w-96"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* smaller screens */}
      <div className="sm:hidden flex flex-col justify-center items-center bg-gray-100 rounded-md p-8">
        <p className="text-3xl font-semibold mb-4 text-center">
          Get Promo Code by Subscribing to our newsletter
        </p>
        <form action="" className="flex justify-center items-center w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none w-96"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
