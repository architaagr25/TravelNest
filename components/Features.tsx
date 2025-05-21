"use client";

import Image from "next/image";
import { useState } from "react";

import { features } from "@/constants";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row bg-cover bg-center overflow-hidden pt-10"
      style={{ backgroundImage: "url('/feature-bg.jpg')" }}
    >
      {/* Left Section - Feature Cards */}
      <div className="w-full md:w-[40%] h-full flex flex-col justify-center items-start px-6 md:px-10 py-16 gap-6 bg-black bg-opacity-40 ">
        <h2 className="bold-88 text-4xl md:text-6xl font-extrabold text-white mb-10 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 bg-clip-text text-transparent animate-fade-in">
          Our Features
        </h2>
        {features.map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => setActiveFeature(feature.id)}
            onMouseLeave={() => setActiveFeature(null)}
            className={`w-full cursor-pointer transition-all duration-500 transform rounded-xl bg-blue-100 bg-opacity-80 p-5 md:p-6 shadow-lg border border-gray-200 hover:translate-x-2 backdrop-blur-md hover:scale-105 ${
              activeFeature === feature.id ? "bg-blue-100 scale-105" : ""
            } animate-fade-in`}
          >
            <div className="flex items-center gap-4">
              <Image src={feature.icon} alt={feature.title} width={80} height={80} />
              <h3 className="text-lg md:text-xl bold-20 text-gray-800">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section - Expanded Feature Details */}
      <div className="relative w-full md:w-[60%] h-screen flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {features.map((feature) => (
          <div
            key={feature.id}
            className={`absolute max-w-3xl w-11/12 md:w-2/3 p-6 md:p-10 bg-white rounded-3xl shadow-2xl transition-opacity duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 ${
              activeFeature === feature.id
                ? "opacity-100 scale-100 z-10 pointer-events-auto"
                : "opacity-0 scale-95 z-0 pointer-events-none"
            }`}
            style={{ top: "50%", left: "50%" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{feature.title}</h3>
            <p className="regular-18 text-base md:text-lg leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
