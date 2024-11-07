import React from "react";
import image from "../../assets/chef.jpg";
import { TiTick } from "react-icons/ti";

export const Experts = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-5 container mx-auto">
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between p-5 mx-auto sm:mt-20 space-y-10 sm:space-y-0">
            <div className="sm:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Our Expects Chef</h2>
              <p className=" mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                aliquet bibendum ligula, eu laoreet nulla tempor non. Nunc eget
                felis ante.
              </p>

              <div className="w-full flex gap-4 mb-5">
                <div className="sm:w-1/2 space-y-6 ">
                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="w-1/2 space-y-6 hidden sm:block">
                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-primary text-white text-sm rounded-full w-6 h-5 flex items-center justify-center shadow-lg top-1.5 relative">
                      <TiTick size={16} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  className="bg-secondary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
                  aria-label="Book a table"
                >
                  Menu
                </button>
                <button
                  className="bg-primary text-white text-sm px-3 py-2 rounded-tl-xl rounded-br-xl shadow-lg"
                  aria-label="Book a table"
                >
                  Book a table
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:ml-10 order-first sm:order-last pb-10">
              <img
                src={image}
                alt="Restaurant"
                className="w-full h-60 md:h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
