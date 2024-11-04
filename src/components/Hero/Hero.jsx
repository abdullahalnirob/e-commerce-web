import React from "react";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between mx-10">
        <div className="w-[120%] md:w-[50%]">
          <Slider />
        </div>
        <div className="mx-0 my-10 md:my-0 md:mx-10">
          <h1 className="text-5xl md:text-7xl">E-commerce</h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            vitae cum saepe optio quos libero.
          </p>
          <a href="#products">
            <button
              className="bg-blue-600 hover:bg-blue-700 duration-300
          active:scale-95
           px-5 md:px-10 py-2 md:py-3 my-4 text-white"
            >
              Shop Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;