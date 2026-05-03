import React from "react";
import {
  Sprout,
  Tractor,
  Droplets,
  Sun,
  CloudRain,
  Warehouse,
  Leaf,
} from "lucide-react";

const facilities = [
  { name: "Smart Irrigation", Icon: Droplets },
  { name: "Soil Health", Icon: Sprout },
  { name: "Weather Alerts", Icon: CloudRain },
  { name: "Farm Machinery", Icon: Tractor },
  { name: "Solar Pumps", Icon: Sun },
  { name: "Storage", Icon: Warehouse },
  { name: "Organic Inputs", Icon: Leaf },
];

const Slides = () => {
  return (
    <section className="w-full bg-linear-to-r from-green-800 via-green-700 to-lime-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-6 px-4">
        {facilities.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white/20 p-3 rounded-full border border-white/30 mb-2">
              <Icon size={28} className="text-yellow-300" />
            </div>
            <span className="text-sm font-semibold tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slides;
