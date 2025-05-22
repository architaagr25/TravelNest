"use client";

import Image from "next/image";

const GetApp = () => {
  return (
    <section className="relative w-full overflow-hidden  text-white py-24 px-6 md:px-16"
    style={{ backgroundImage: "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921338/getappimg_cudnbr.jpg')" }}>
      {/* Diagonal Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 clip-diagonal bg-gradient-to-r from-blue-800 to-purple-700 opacity-30 animate-gradientMove" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20 animate-fade-slide">
        {/* Phone Image */}
        <div className="w-full md:w-1/2 flex justify-center relative group">
          <Image
            src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921337/phone_avkex9.png"
            alt="App Preview"
            width={280}
            height={560}
            className="rounded-3xl shadow-2xl phone-bounce group-hover:scale-110 transition-transform duration-500"
          />
          <div className="bold-18 absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Cool right? 😎
          </div>
        </div>

        {/* CTA Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 animate-slide-in hover:shadow-2xl transition-shadow duration-500">
          <h2 className="bold-52 font-extrabold bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text animate-pulse">
            Download the App
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Unlock the full TripNest experience. Seamless navigation, real-time
            location sharing, and smart trail planning. Start your journey now!
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#"
              className="bg-white text-blue-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="bg-white text-blue-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300"
            >
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
