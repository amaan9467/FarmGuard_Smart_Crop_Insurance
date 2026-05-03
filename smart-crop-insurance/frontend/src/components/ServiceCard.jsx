import React from "react";

const ServiceCard = ({ title, description, image, icon }) => {
  return (
    <div
      className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer border border-gray-200 hover:border-green-400"
    >
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600">{icon}</span>
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
