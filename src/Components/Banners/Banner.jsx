import BannerTextContent from "./BannerTextContent";
import bannerImg from "../../assets/airpod-mad.png";
const Banner = () => {
  return (
    <div className="container mt-32 h-full ">
      <div className="grid grid-cols-12 h-full bg-gray px-8 md:px-20">
        <div className="col-span-12 lg:col-span-6">
          <BannerTextContent />
        </div>

        <div className="col-span-12 lg:col-span-6 relative">
          <img
            className="h-full w-full object-cover scale-105 md:absolute md:-top-20"
            src={bannerImg}
            alt="Airpod"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
