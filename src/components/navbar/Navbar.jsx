import React from "react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center container mx-auto p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Restaurant logo" className="w-12" />
            <span className="font-bold text-xl">restaurant</span>
          </div>
          <div className="sm:hidden">
            <Link
              to="/book"
              className="bg-primary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
              aria-label="Book a table"
            >
              Book a table
            </Link>
          </div>
        </div>
        <div className="flex gap-10 justify-center mt-2 sm:mt-0">
          <Link to="/">Home</Link>
          <Link to="/">Events</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="sm:flex justify-end hidden">
          <Link
            to="/book"
            className="bg-primary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
            aria-label="Book a table"
          >
            Book a table
          </Link>
        </div>
      </div>
    </div>
  );
};
