import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Restaurant logo" className="w-12" />
              <span className="font-bold text-xl ml-3">Restaurant</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              accusamus eum reiciendis.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg mb-4">Navigations</p>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Events
              </Link>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Gallery
              </Link>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg mb-4">Dishes</p>
            <div className="flex flex-col gap-2">
              <p>Fish & Veggies</p>
              <p>Tofu Chicken</p>
              <p>Egg & Cucumber</p>
              <p>Lumpia w/Sauce</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg mb-4">Follow Us</p>
            <div className="flex gap-4 justify-start">
              <FaFacebook className="text-2xl text-gray-300 hover:text-blue-500 transition duration-300" />
              <FaInstagram className="text-2xl text-gray-300 hover:text-pink-500 transition duration-300" />
              <BsTwitterX className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-semibold text-lg mb-4">Opening Hours</p>
            <div className="text-sm">
              <p>Monday - Friday: 10:00 - 23:00</p>
              <p>Saturday - Sunday: 10:00 - 02:00</p>
            </div>
          </div>
          <div>
            <p className="text-sm">Phone: +012 345 6789</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-4 text-center">
          <p className="text-sm">
            &copy; 2023 Restaurant. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <p className="text-sm text-gray-300 hover:text-blue-500">
              Terms of Service
            </p>
            <p className="text-sm text-gray-300 hover:text-blue-500">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
