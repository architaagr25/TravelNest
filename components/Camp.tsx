import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`relative h-full w-full min-w-[320px] sm:min-w-[500px] md:min-w-[700px] lg:min-w-[900px] xl:min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl transition-transform duration-300 hover:scale-[1.02]`}
    >
      <div className="flex h-full flex-col justify-between p-6 lg:px-16 lg:py-12 bg-black/40 rounded-3xl backdrop-blur-sm">
        <div className="flex items-center gap-4 animate-fade-in-up">
          <div className="rounded-full bg-blue-500 p-4 transition duration-300 hover:scale-110">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h4 className="bold-20">{title}</h4>
            <p className="regular-16">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 animate-fade-in-up">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full border-2 border-white"
                src={url}
                key={url}
                alt="person"
                width={56}
                height={56}
              />
            ))}
          </span>
          <p className="bold-18 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 px-4 sm:px-6">
      {/* Horizontal Scroll Section */}
      <div
        className="hide-scrollbar flex w-full gap-6 overflow-x-auto pb-6 md:gap-8 lg:h-[400px] xl:h-[640px] scroll-smooth"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Roopkund Trek"
          subtitle="Uttarakhand, India"
          peopleJoined=" 80+ Joined"
        />

        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Hampta Pass"
          subtitle="Himachal Pradesh, India"
          peopleJoined=" 100+ Joined"
        />

        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Kedartal Trek"
          subtitle="Uttarakhand, India"
          peopleJoined=" 50+ Joined"
        />
      </div>

      {/* Quote Box */}
      <div className="flexEnd mt-10 px-4 lg:-mt-60 lg:mr-6">
        <div className="relative w-full max-w-2xl xl:max-w-[734px] rounded-3xl xl:rounded-5xl bg-blue-600 bg-opacity-90 p-8 xl:px-16 xl:py-20 transition-all duration-300 hover:shadow-2xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white animate-fade-in-up">
            <strong>Feeling Lost</strong> And Unsure Where to Begin Your Climb?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white animate-fade-in-up delay-100">
            We understand the uncertainty that comes with exploring a new climbing spot — the fear
            of getting lost is real. That’s why we’re here: to guide and support your journey from
            the very first step of your adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute bottom-0 right-0 opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
