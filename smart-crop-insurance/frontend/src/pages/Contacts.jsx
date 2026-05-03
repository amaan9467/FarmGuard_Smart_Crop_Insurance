import React from "react";

const Contacts = () => {
  return (
    <div className="bg-white font-sans mt-20">

      {/* HERO TITLE */}
      <div className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Contact Us
        </h1>
      </div>

      {/* INFO SECTION */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10 text-center">

        {/* Address */}
        <div>
          <div className="flex justify-center mb-3">
            <span className="text-4xl text-green-700">📍</span>
          </div>
          <h3 className="text-xl font-semibold text-green-800">Address</h3>
          <p className="text-gray-600 mt-1">
            Lucknow , Uttar Pradesh, India 
            <br />226016
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-center mb-3">
            <span className="text-4xl text-green-700">✉️</span>
          </div>
          <h3 className="text-xl font-semibold text-green-800">Email Address</h3>
          <p className="text-gray-600 mt-1">contact@freshgrains.com</p>
          <p className="text-gray-600">contact@freshgrains2.com</p>
        </div>

        {/* Phone */}
        <div>
          <div className="flex justify-center mb-3">
            <span className="text-4xl text-green-700">📞</span>
          </div>
          <h3 className="text-xl font-semibold text-green-800">Phone</h3>
          <p className="text-gray-600 mt-1">+91 8423589445</p>
          <p className="text-gray-600">+91 1234567890</p>
        </div>

      </div>

      {/* FORM SECTION */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Have Questions? Get In Touch!
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-green-50 p-8 rounded-xl shadow">

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="col-span-1 md:col-span-2 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="col-span-1 md:col-span-2 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="5"
            className="col-span-1 md:col-span-2 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Here
          </button>
        </form>
      </div>

      {/* MAP SECTION */}
      <div className="w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8591142434547!2d80.999!3d26.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzUyLjgiTiA4MMKwNTknNTYuNSJF!5e0!3m2!1sen!2sin!4v1703255871283"
          className="w-full h-80 border-0"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contacts;
