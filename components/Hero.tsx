
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative max-container px-6 py-10 pb-32 lg:py-20 xl:flex xl:items-start xl:gap-16">

      {/* Background Map */}
      <div className="absolute inset-0 -z-10 hero-map" />

      {/* Left Side Content */}
      <div className="z-10 flex-1 flex flex-col gap-8 xl:max-w-[50%]">
        <div className="relative mb-2">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute -left-2 -top-8 w-10 lg:w-[50px] animate-bounce"
            style={{ animationDuration: '3s' }}
          />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-300 hover:text-green-80">
            Trailblaze Basecamp
          </h1>
        </div>

        <p className="regular-18 text-gray-30 leading-relaxed xl:max-w-[520px]">
          Explore untamed wilderness, conquer scenic trails, and experience adventure like never before.
          Your gateway to breathtaking views, vibrant wildlife, and unforgettable memories.
        </p>

        {/* Reviews */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex gap-1">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={26}
                height={26}
                className="transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 underline ml-1">Glowing reviews</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_blue"
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.png"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Distance Card */}
      <div className="mt-16 xl:mt-0 xl:flex-1 flex justify-center xl:justify-end">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[268px] rounded-3xl bg-green-90 px-7 py-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="regular-16 text-gray-20">Location</p>
              <p className="bold-20 text-white">Hampta Pass</p>
            </div>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>

          <div className="flex justify-between">
            <div>
              <p className="regular-16 text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 km</p>
            </div>
            <div>
              <p className="regular-16 text-gray-20">Elevation</p>
              <p className="bold-20 text-white">3.032 km</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
