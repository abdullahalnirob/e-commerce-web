import React from "react";

const Hero = () => {
  return (
    <div className="relative mt-16 w-full h-screen hero">
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center z-10">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-white px-1 md:px-0">
            Experience the Ultimate Shopping Experience
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 animate__animated animate__fadeIn animate__delay-2s text-white">
            Unveil exclusive offers, only at LuLu Baba. Your journey starts here.
          </p>
          <a href="#products">
            <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg transition duration-300 animate__animated animate__fadeIn animate__delay-3s">
              Start Shopping
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;