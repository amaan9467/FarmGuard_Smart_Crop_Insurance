import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// 🌿 Footer Data (Inline JSON)
const footerData = {
  brand: {
    name: "FarmGuard",
    tagline:
      "Empowering farmers with technology-driven insights, smart irrigation, and sustainable agriculture solutions.",
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Contact", url: "/contacts" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Smart Irrigation", url: "#" },
        { label: "Crop Monitoring", url: "#" },
        { label: "Soil Testing", url: "#" },
        { label: "Weather Prediction", url: "#" },
      ],
    },
    {
      title: "Contact Us",
      contacts: [
        {
          type: "address",
          icon: "MapPin",
          value: "Lucknow, Uttar Pradesh, India",
        },
        { type: "phone", icon: "Phone", value: "+91 8423589445" },
        { type: "email", icon: "Mail", value: "support@farmguard.in" },
      ],
    },
  ],
  footerBottom: {
    text: `© ${new Date().getFullYear()} FarmGuard. All rights reserved.`,
    credit: "Designed with 🌿 by Amaan Hussain",
  },
};

// 🌾 Icon Mapping
const iconMap = { Mail, Phone, MapPin };

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 mt-10 relative overflow-hidden">
      {/* 🌿 Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-t from-green-800 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 🌱 Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-300 mb-4">
              {footerData.brand?.name}
            </h2>
            <p className="text-green-100 text-sm leading-relaxed">
              {footerData.brand?.tagline}
            </p>
          </div>

          {/* 🌿 Footer Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">
                {section.title}
              </h3>

              {section.links && (
                <ul className="space-y-2 text-green-100">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="hover:text-yellow-300 transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.contacts && (
                <ul className="space-y-3 text-green-100 text-sm">
                  {section.contacts.map((contact, i) => {
                    const Icon = iconMap[contact.icon];
                    return (
                      <li key={i} className="flex items-center gap-2">
                        <Icon size={18} className="text-yellow-400" />
                        {contact.value}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 🌾 Footer Bottom */}
        <div className="border-t border-green-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
          <p>{footerData.footerBottom.text}</p>
          <p className="mt-3 md:mt-0">{footerData.footerBottom.credit}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
