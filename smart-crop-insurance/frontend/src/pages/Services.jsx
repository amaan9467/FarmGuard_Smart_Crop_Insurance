import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-16 py-10 font-sans">

      {/* About Section */}
      <h1 className="text-4xl font-bold text-center mb-6 text-green-700">
        About Our farms
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        Welcome to <strong>FarmGuard </strong>, where traditional farming meets 
        modern sustainability. We grow organic crops using advanced techniques like 
        smart irrigation, soil monitoring sensors, and eco-friendly harvesting.
        <br /><br />
        Our mission is to provide high-quality, chemical-free, and fresh farm products 
        directly from our fields to your home.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mt-10">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="farm"
          className="w-4/5 md:w-3/5 rounded-xl shadow-lg"
        />
      </div>

      {/* Map Section */}
      <h2 className="text-3xl font-semibold text-center mt-16 text-green-700">
        Our Location
      </h2>

      <div className="flex justify-center mt-6">
        <iframe
          title="farm-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8591142434547!2d80.999!3d26.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzUyLjgiTiA4MMKwNTknNTYuNSJF!5e0!3m2!1sen!2sin!4v1703255871283"
          className="w-4/5 md:w-3/5 h-80 rounded-xl shadow-md border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Section */}
      <h2 className="text-3xl font-semibold text-center mt-16 text-green-700">
        Contact Us
      </h2>

      <div className="max-w-lg mx-auto mt-8 bg-gray-100 p-6 rounded-xl shadow-md">
        <p className="text-gray-700"><strong>📍 Address:</strong> FarmGuard, Lucknow, UP</p>
        <p className="text-gray-700"><strong>📞 Phone:</strong> +91 8423589445</p>
        <p className="text-gray-700 mb-4"><strong>📧 Email:</strong> amaanhussain0010@gmail.com</p>

        <h3 className="text-xl font-semibold mb-3">Send us a message</h3>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
