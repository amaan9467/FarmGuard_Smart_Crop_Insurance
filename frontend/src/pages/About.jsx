import React from "react";
import amaanImg from "../assets/images/amaan.jpg";

const About = () => {
  return (
    <div className="bg-white font-sans mt-20">

      {/* HEADER SECTION */}
      <div className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          About Us
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Building the future of sustainable, smart agriculture.
        </p>
      </div>

      {/* ABOUT ROW SECTION */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="farm"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            FarmGuard Farms is dedicated to growing organic, chemical-free crops using modern and sustainable agricultural techniques. 
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            With smart irrigation, soil monitoring, crop analytics, and eco-friendly farming, we are transforming the way India grows food.
          </p>
        </div>
      </div>

      {/* 🌟 OUR STORY SECTION */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Our Story</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          FarmGuard began with a mission to empower farmers with modern tools, 
          connect them to markets, and promote safe, organic farming practices.
          What started as a small initiative has now become a full smart farming ecosystem.
        </p>
      </div>

      {/* 💚 WHY CHOOSE US CARDS */}
      <div className="bg-green-50 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Why Choose FarmGuard?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Modern Technology</h3>
            <p className="text-gray-600">
              We use smart irrigation, IoT devices, and AI-powered analytics for better farming outcomes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">100% Organic</h3>
            <p className="text-gray-600">
              Our farms follow natural, chemical-free practices for safe and healthy produce.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Farmer Empowerment</h3>
            <p className="text-gray-600">
              We train farmers, provide tools, connect them to markets, and boost their income.
            </p>
          </div>

        </div>
      </div>

      {/* MISSION | VISION | VALUES */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Our Mission, Vision & Values
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">

          {/* Mission */}
          <div>
            <div className="text-4xl mb-3 text-green-700">🌱</div>
            <h3 className="text-xl font-semibold text-green-800">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              To modernize agriculture and promote sustainable farming.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="text-4xl mb-3 text-green-700">🌾</div>
            <h3 className="text-xl font-semibold text-green-800">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To become India’s most trusted eco-friendly farming brand.
            </p>
          </div>

          {/* Values */}
          <div>
            <div className="text-4xl mb-3 text-green-700">🌍</div>
            <h3 className="text-xl font-semibold text-green-800">Our Values</h3>
            <p className="text-gray-600 mt-2">
              Sustainability, transparency, purity, and farmer-first approach.
            </p>
          </div>

        </div>
      </div>

     {/* TEAM SECTION */}
<div className="bg-green-50 py-20">
  <h2 className="text-4xl font-extrabold text-center text-green-900 mb-4">
    Meet Members of Our Team
  </h2>
  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
    Our dedicated team of experts works passionately to bring innovation,
    sustainability, and growth to modern agriculture.
  </p>

  <div className="max-w-2xl items-center justify-center px-6 mx-auto grid md:grid-cols-1 gap-10">

    {/* TEAM CARD 1 */}
    <div className="bg-white rounded-2xl items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-green-200 hover:border-green-500">
      <div className="relative flex justify-center">
        <img
          src={amaanImg}
          className="w-52 h-52 rounded-full border-4 border-green-300 object-cover shadow-md"
        />
      </div>

      <h3 className="text-xl font-semibold text-green-800 mt-4">Amaan Hussain</h3>
      <p className="text-gray-500 text-sm">Founder & CEO</p>

    </div>


  </div>
</div>


      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-4xl font-bold text-green-700">10+</h2>
          <p className="text-gray-600">Years of Farming</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-700">50+</h2>
          <p className="text-gray-600">Organic Products</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-700">1000+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-700">20+</h2>
          <p className="text-gray-600">Expert Farmers</p>
        </div>

      </div>

    </div>
  );
};

export default About;
