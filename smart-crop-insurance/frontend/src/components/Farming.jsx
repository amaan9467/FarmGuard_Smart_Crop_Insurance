import React from "react";
import farmImage from "../assets/images/farm.jpeg"; // replace with your image path
import { Sprout, Sun } from "lucide-react"; // optional farming icons

const Farming = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6 md:px-20 flex flex-col items-center">
      {/* 🌿 Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
          🌾 Sustainable Farming for the Future
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering farmers through innovation, eco-friendly methods, and modern agricultural technology.
        </p>
      </div>

      {/* 🌱 Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* LEFT SIDE - IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={farmImage}
            alt="Farming"
            className="rounded-2xl shadow-lg w-4/5 md:w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 flex items-center justify-center md:justify-start gap-2">
            <Sprout className="text-green-600 w-10 h-10" /> Modern Farming Solutions
          </h1>

          <h2 className="text-xl text-green-700 mt-4 flex items-center justify-center md:justify-start gap-2">
            <Sun className="text-yellow-500 w-6 h-6" /> Grow Smart, Live Green
          </h2>

          <p className="text-gray-700 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Revolutionizing agriculture with sustainable technologies, smart irrigation systems, and organic farming methods.
            Together, we can build a greener and healthier future for farmers and our planet.
          </p>

          {/* 🌻 Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-green-300/40 transform hover:-translate-y-1 transition duration-300 ease-in-out">
              Learn More
            </button>
            <button className="border-2 border-green-600 text-green-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white shadow-md hover:shadow-green-300/40 transform hover:-translate-y-1 transition duration-300 ease-in-out">
              Join Initiative
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Farming;
