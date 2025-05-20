
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container flex flex-col padding-container gap-14 sm:gap-20 md:gap-28 py-10 pb-32 lg:py-20 xl:flex-row">

      {/* Background Map */}
      <div className="hero-map" />

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] animate-bounce-slow"
        />

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-300 hover:text-green-80">
          Trailblaze Basecamp
        </h1>

        <p className="regular-18 mt-6 text-gray-30 xl:max-w-[520px] leading-relaxed">
          Explore untamed wilderness, conquer scenic trails, and experience adventure like never before.
          Your gateway to breathtaking views, vibrant wildlife, and unforgettable memories.
        </p>

        {/* Review Stars */}
        <div className="my-10 flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-2">
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
            <span className="regular-16 lg:regular-20 ml-1 underline">Glowing reviews</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
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
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01]">
          
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Hampta Pass</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 km</p>
            </div>
            <div className="flex flex-col">
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
