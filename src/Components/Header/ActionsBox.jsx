import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";

const ActionsBox = () => {
  return (
    <div className="flex items-center gap-x-5 bg-red-200 cursor-pointer ">
      <FaMagnifyingGlass size={20} />
      <FaRegHeart size={20} />
      <RiShoppingCartLine size={20} />
      <RiUserLine size={20} />
    </div>
  );
};

export default ActionsBox;
