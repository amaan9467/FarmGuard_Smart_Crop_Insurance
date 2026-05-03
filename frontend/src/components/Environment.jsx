import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Recycle, Sprout, Sun } from "lucide-react"; // added farming-related icons
import environmentImg from "../assets/images/e1.jpg"; // replace with your image path

const Environment = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 bg-green-50 p-10  max-w-6xl mx-auto mt-10">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={environmentImg}
          alt="Environment"
          className="rounded-2xl shadow-md w-6/6 md:w-full object-cover"
        />
      </div>

      {/* Right Section - Text and Buttons */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-800 flex items-center justify-center md:justify-start gap-2">
          <Leaf className="text-green-600 w-8 h-8" /> Save The Environment
        </h1>

        <h2 className="text-xl text-green-700 mt-3 flex items-center justify-center md:justify-start gap-2">
          <Recycle className="text-green-500 w-6 h-6" /> Go Green, Live Clean
        </h2>


        {/* Additional Subheadings related to Farming */}
        <div className="mt-8 space-y-6">
          {/* Subheading 1 */}
          <div>
            <h3 className="text-2xl font-semibold text-green-800 flex items-center justify-center md:justify-start gap-2">
              <Sprout className="text-green-600 w-6 h-6" /> Sustainable Farming
            </h3>
            <p className="text-gray-700 mt-2">
              Promote eco-friendly agricultural practices like crop rotation,
              organic fertilizers, and water-efficient irrigation to protect the
              soil and enhance biodiversity.
            </p>
          </div>

          {/* Subheading 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-green-800 flex items-center justify-center md:justify-start gap-2">
              <Sun className="text-yellow-500 w-6 h-6" /> Smart Agriculture
            </h3>
            <p className="text-gray-700 mt-2">
              Integrate modern technology like AI, IoT sensors, and drone
              monitoring to improve productivity and reduce waste in farming.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          <button
            onClick={() => navigate("/services")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Learn More
          </button>
          <button
            onClick={() => navigate("/contacts")}
            className="border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Environment;
