import React from "react";
import { Leaf, Tractor, Droplets, Users } from "lucide-react"; // Lucide icons

import wheat from "../assets/images/wheat.jpg";
import tractor from "../assets/images/tractor.jpeg";
import irrigation from "../assets/images/irrigation.jpg";
import farmer from "../assets/images/farmer.jpeg";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: wheat,
      title: "Organic Crop Cultivation",
      description:
        "Promote the growth of pesticide-free crops that ensure health, sustainability, and better soil fertility.",
      icon: <Leaf className="text-green-600 w-14 h-14" />,
    },
    {
      id: 2,
      image: tractor,
      title: "Modern Farming Equipment",
      description:
        "Adopt modern technology like automated tractors and smart ploughs to improve efficiency and reduce labor.",
      icon: <Tractor className="text-green-600 w-14 h-14" />,
    },
    {
      id: 3,
      image: irrigation,
      title: "Smart Irrigation Systems",
      description:
        "Use IoT-based drip irrigation systems that save water and provide optimal hydration for crops.",
      icon: <Droplets className="text-green-600 w-14 h-14" />,
    },
    {
      id: 4,
      image: farmer,
      title: "Empowering Local Farmers",
      description:
        "Support rural farmers with fair trade prices, training programs, and government-backed farming initiatives.",
      icon: <Users className="text-green-600 w-14 h-14" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-green-800 text-center mb-4 flex justify-center items-center gap-2">
        🌾 Sustainable Farming Practices
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Discover modern, eco-friendly farming methods that help preserve
        biodiversity, boost productivity, and ensure a greener future for all.
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...cardData].reverse().map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            {/* Icon at Top */}
            <div className="pt-6">{card.icon}</div>

            {/* Title + Description */}
            <div className="p-5 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>

            {/* Image at Bottom */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover mt-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
