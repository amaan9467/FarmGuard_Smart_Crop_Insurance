import React from "react";
import {
  CloudSun, Droplets, Leaf, BarChart3, Brain, Camera, TrendingUp, Globe2,
  ShoppingCart, DollarSign, Truck, Package, CreditCard, ShieldCheck,
  GraduationCap, MessageCircle, BookOpen, Recycle, Sun, Battery
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import weatherImg from "../assets/images/weather.jpeg";
import irrigationImg from "../assets/images/irrigation.jpg";
import soilImg from "../assets/images/soil.jpeg";
import analyticsImg from "../assets/images/analytics.jpeg";
import aiImg from "../assets/images/ai.jpg";
import pestImg from "../assets/images/pest.jpg";
import yieldImg from "../assets/images/analytics.jpeg";
import satelliteImg from "../assets/images/satellite.jpg";
import marketImg from "../assets/images/market.jpg";
import priceImg from "../assets/images/price.jpg";
import ecommerceImg from "../assets/images/market.jpg";
import logisticsImg from "../assets/images/logistics.jpg";
import loanImg from "../assets/images/loan.jpg";
import subsidyImg from "../assets/images/subsidy.jpg";
import insuranceImg from "../assets/images/insurance.jpg";
import trainingImg from "../assets/images/training.jpg";
import chatbotImg from "../assets/images/chatbot.jpg";
import organicImg from "../assets/images/organic.jpg";
import solarImg from "../assets/images/solar.jpg";
import wasteImg from "../assets/images/waste.jpg";


const Services = () => {
  const serviceSections = [
    {
      title: "🌾 Smart Farming & IoT Solutions",
      description:
        "Bring precision to farming using sensors, automation, and real-time environmental data.",
      services: [
        {
          title: "Weather Monitoring & Forecasting",
          description:
            "Live temperature, humidity, rain forecasting and wind updates.",
          image: weatherImg,
          icon: <CloudSun className="w-5 h-5" />,
        },
        {
          title: "Smart Irrigation Systems",
          description:
            "IoT-based automation for water efficiency and maximum crop yield.",
          image: irrigationImg,
          icon: <Droplets className="w-5 h-5" />,
        },
        {
          title: "Soil Health Monitoring",
          description:
            "Measure pH, NPK, moisture, and nutrients instantly using smart probes.",
          image: soilImg,
          icon: <Leaf className="w-5 h-5" />,
        },
        {
          title: "Crop Growth Analytics",
          description:
            "AI insights for growth tracking, health monitoring and yield improvement.",
          image: analyticsImg,
          icon: <BarChart3 className="w-5 h-5" />,
        },
      ],
    },

    {
      title: "🤖 AI & Data-Driven Agricultural Insights",
      description:
        "Advanced machine learning to predict diseases, recommend crops and improve yield.",
      services: [
        {
          title: "AI Crop Recommendation",
          description:
            "Best crop suggestions based on soil & weather intelligence.",
          image: aiImg,
          icon: <Brain className="w-5 h-5" />,
        },
        {
          title: "Pest & Disease Detection",
          description:
            "Upload plant photos and detect diseases instantly using AI.",
          image: pestImg,
          icon: <Camera className="w-5 h-5" />,
        },
        {
          title: "Yield Prediction Models",
          description:
            "Predict your crop yield using historical and environmental patterns.",
          image: yieldImg,
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          title: "Satellite & Drone Analysis",
          description:
            "Remote sensing to detect crop stress and soil issues.",
          image: satelliteImg,
          icon: <Globe2 className="w-5 h-5" />,
        },
      ],
    },

    {
      title: "🚜 Market & Supply Chain Solutions",
      description:
        "Connecting farmers to buyers, logistics, pricing data, and marketplaces.",
      services: [
        {
          title: "Online Marketplace",
          description:
            "Sell produce directly to buyers with no middlemen.",
          image: marketImg,
          icon: <ShoppingCart className="w-5 h-5" />,
        },
        {
          title: "Real-Time Price Updates",
          description:
            "Get mandi rates instantly for transparent selling.",
          image: priceImg,
          icon: <DollarSign className="w-5 h-5" />,
        },
        {
          title: "Agro Input E-commerce",
          description:
            "Buy seeds, fertilizers, tools at your doorstep.",
          image: ecommerceImg,
          icon: <Package className="w-5 h-5" />,
        },
        {
          title: "Logistics & Cold Storage",
          description:
            "Find trucks, cold storage, and warehouse partners near you.",
          image: logisticsImg,
          icon: <Truck className="w-5 h-5" />,
        },
      ],
    },

    {
      title: "💰 Finance & Insurance Assistance",
      description:
        "Helping farmers with loans, insurance, and subsidy applications.",
      services: [
        {
          title: "Crop Loan Assistance",
          description: "Simplified loan documentation and approval help.",
          image: loanImg,
          icon: <CreditCard className="w-5 h-5" />,
        },
        {
          title: "Subsidy Application Support",
          description:
            "Assistance with state & central subsidy schemes.",
          image: subsidyImg,
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Crop Insurance Portal",
          description:
            "Protect crops from natural calamities & pests.",
          image: insuranceImg,
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ],
    },

    {
      title: "🎓 Training & Advisory Services",
      description:
        "Skill development, learning, and 24/7 expert advisory.",
      services: [
        {
          title: "Online Training & Webinars",
          description:
            "Workshops & expert-led modern farming courses.",
          image: trainingImg,
          icon: <GraduationCap className="w-5 h-5" />,
        },
        {
          title: "AI Chatbot Advisor",
          description:
            "Instant help for any farming-related question.",
          image: chatbotImg,
          icon: <MessageCircle className="w-5 h-5" />,
        },
        {
          title: "Knowledge Library",
          description:
            "Guides, articles & videos about modern agriculture.",
          image: trainingImg,
          icon: <BookOpen className="w-5 h-5" />,
        },
      ],
    },

    {
      title: "🌎 Sustainable & Eco-Friendly Farming",
      description:
        "Organic practices, renewable energy, and natural waste management.",
      services: [
        {
          title: "Organic Farming Consultation",
          description:
            "Transition to chemical-free farming easily.",
          image: organicImg,
          icon: <Leaf className="w-5 h-5" />,
        },
        {
          title: "Solar-Powered Irrigation",
          description:
            "Lower energy cost using solar pumps.",
          image: solarImg,
          icon: <Sun className="w-5 h-5" />,
        },
        {
          title: "Waste Management",
          description:
            "Turn waste into compost or renewable energy.",
          image: wasteImg,
          icon: <Recycle className="w-5 h-5" />,
        },
        {
          title: "Renewable Energy for Farms",
          description:
            "Biogas & solar solutions for rural areas.",
          image: solarImg,
          icon: <Battery className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20 mt-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
          🌿 Our Services
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Empowering farmers with AI, IoT, sustainability, market access and training.
        </p>
      </div>

      {/* Service Sections */}
      {serviceSections.map((section, idx) => (
        <div key={idx} className="mb-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            {section.title}
          </h2>

          <p className="text-gray-600 mb-8 max-w-3xl">
            {section.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {section.services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      ))}

    </section>
  );
};

export default Services;
