import React from "react";
import image from "../../assets/image3.jpg";

export const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="w-full lg:w-1/2 flex items-center justify-center border">
        <span className="text-4xl font-bold">Nash</span>
      </div>
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src={image}
          alt="Header background"
          className="w-full h-full lg:w-full lg:h-full object-cover border"
        />
      </div>
    </div>
  );
};
