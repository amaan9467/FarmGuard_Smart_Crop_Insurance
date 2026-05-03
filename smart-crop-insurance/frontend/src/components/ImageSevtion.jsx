import React from "react";
import crop from "../assets/crop1.jpg"; // ✅ your background image

const ImageSection = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${crop})`, 
      }}
    >
      {/* 🌾 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌻 Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
          Empowering Farmers, Growing Futures 🌿
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join us in revolutionizing agriculture with modern tools, insights, and support
          for every farmer across India.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-8">
  {/* 🌾 Get Started Button */}
  <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-yellow-300/50 transform hover:-translate-y-1 transition duration-300 ease-in-out">
    Get Started
  </button>

  {/* 🌿 Read More Button */}
  <button className="bg-white border-2 border-gray-300 rounded-full text-green-900 font-semibold px-8 py-3 text-lg shadow-md hover:shadow-yellow-300/40 hover:border-yellow-400 transform hover:-translate-y-1 transition duration-300 ease-in-out">
    Read More
  </button>
</div>

      </div>
    </section>
  );
};

export default ImageSection;
