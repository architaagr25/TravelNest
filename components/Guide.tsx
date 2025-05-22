"use client";


import Image from "next/image";

const Guide = () => {
  return (
    <section className="flex flex-col items-center w-full bg-gradient-to-b from-white to-blue-50">
      {/* Top Section */}
      <div className="max-container w-full px-6 sm:px-12 pb-24 pt-16 space-y-8">
        <div className="flex items-center gap-3 animate-slide-in-left">
          <Image src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921332/camp_hk7xyx.svg" alt="camp" width={50} height={50} />
          <p className="uppercase bold-18 text-blue-700 tracking-widest drop-shadow-sm">
            Your Adventure Starts with Us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center animate-fade-in-up delay-100">
          <h2 className="bold-40 lg:bold-64 leading-tight text-gray-900">
            Navigate the Great Depths with Confidence
          </h2>
          <p className="regular-16 text-gray-700 leading-relaxed">
            With the <span className="text-blue-600 font-semibold">TripNest</span> app, you’ll never feel lost again. Our offline maps keep you oriented even in the most remote locations. Rally your friends, forge through lush valleys and alpine trails, and ascend to unforgettable peaks — all with full confidence.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-container overflow-hidden rounded-t-3xl group transition-all duration-700">
        <Image
          src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921339/boat_dnkcuh.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/*Floating Info Box */}
        <div className="absolute z-20 top-6 left-4 sm:left-[5%] lg:top-20 bg-white rounded-2xl border shadow-xl py-8 px-10 flex gap-5 items-start animate-slide-in-right delay-300 hover:scale-[1.03] transition-transform duration-300 max-w-[280px]">
          <Image
            src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921332/meter_hwalwo.svg"
            alt="meter"
            width={12}
            height={140}
            className="h-[150px] w-auto opacity-90"
          />

          <div className="flex flex-col gap-5">
            {/* Destination Info */}
            <div className="flex flex-col">
              <div className="flex justify-between text-gray-400 text-md">
                <p>Destination</p>
                <p className="font-semibold text-blue-500"> 57 min</p>
              </div>
              <p className="font-semibold mt-1 text-gray-800 text-base">Rohtang Valley</p>
            </div>

            {/* Start Point */}
            <div className="flex flex-col">
              <p className="text-gray-400 text-md">Starting Point</p>
              <h4 className="font-semibold mt-1 text-gray-800 text-base whitespace-nowrap">
                Manali Trek Point
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
