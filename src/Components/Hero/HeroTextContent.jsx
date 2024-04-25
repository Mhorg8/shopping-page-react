import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import Button from "../Button";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const HeroTextContent = () => {
  const { userProfile } = useContext(MyContext);

  return (
    <div className="py-4 px-3 h-full w-full flex flex-col items-start justify-center ">
      <h4 className="text-lg text-blue font-medium">Better exprince</h4>
      <h2 className="text-[54px] font-bold leading-[45px] select-none">
        Airpod Max <br /> Apple
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-x-10 mt-10">
        <Button>Shop Now</Button>
        {/* userIcons */}

        <div className="flex items-center gap-x-3 mt-5 md:mt-0">
          <div className="flex items-center relative">
            {userProfile.map((user, index) => (
              <img
                style={{ marginLeft: index !== 0 ? "-18px" : 0 }}
                className="w-11 h-11 rounded-full user-img hover:scale-110 border-2 border-white cursor-pointer"
                src={user.imgUrl}
                key={user.id}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center gap-x-1">
              <FaStar color="gold" size={16} />
              <FaStar color="gold" size={16} />
              <FaStar color="gold" size={16} />
              <FaStar color="gold" size={16} />
              <FaStarHalf color="gold" />
            </div>

            <div className="text-sm font-semibold">+10000 Online User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTextContent;
