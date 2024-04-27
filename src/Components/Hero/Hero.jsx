import HeroTextContent from "./HeroTextContent";
import AirPodImage from "../../assets/airpod-mad.png";
import AppleWatch from "../../assets/appleWatch.png";
const Hero = () => {
  return (
    <div className=" w-full bg-gray md:h-screen pt-14 z-40">
      {/* contents*/}
      <div className="container grid grid-cols-12 items-center overflow-hidden gap-y-20">
        {/* text content */}
        <div className="col-span-12 order-2 md:order-1 md:col-span-6 h-fit md:h-[90vh]">
          <HeroTextContent />
        </div>

        <div className="col-span-12 order-1 md:order-2 md:col-span-6 place-content-center h-fit md:h-[90vh] scale-150 md:scale-125 relative hero-img">
          <img className="select-none " src={AirPodImage} alt="AirPodImage" />
          <img
            src={AppleWatch}
            className="select-none absolute md:bottom-20 lg:bottom-1/4 -bottom-24 rotate-45 right-0 scale-[0.30] md:scale-[0.40]"
            alt=""
          />
          <div className="absolute  flex items-center justify-center h-[90px] w-[90px] md:w-[120px] md:h-[120px] bg-blue opacity-80 rounded-full top-14 left-10 md:top-1/4 md:left-20">
            <h3 className="font-medium text-white text-center text-lg md:text-xl select-none">
              Up tp 50% <br />
              <span className="font-bold tracking-wide">0ff</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
