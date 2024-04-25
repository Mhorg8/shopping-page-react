import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import ActionsBox from "./ActionsBox";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { ActivePage, handleActivePaage } = useContext(MyContext);
  return (
    <header className="md:container ">
      <nav className="bg-white fixed z-50 top-0 left-1/2 -translate-x-1/2  w-full flex items-center justify-around py-2 ">
        <Link to="/" className="font-bold text-2xl text-blue">
          eTrade
        </Link>

        <div className="order-2 md:order-3">
          <ActionsBox />
        </div>

        <div
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="text-[18px] block md:hidden order-3 ">
          <div className="z-50">
            <GiHamburgerMenu size={25} />
            {isOpenMenu && <Menu />}
          </div>
        </div>

        {/* LARGE MENU`` */}
        <ul className="hidden md:flex gap-x-5 items-center justify-center large-menu">
          <Link
            onClick={() => handleActivePaage("Home")}
            className={ActivePage === "Home" ? "nav-item active" : "nav-item"}
            to="/">
            Home
          </Link>
          <Link
            onClick={() => handleActivePaage("Store")}
            className={ActivePage === "Store" ? "nav-item active" : "nav-item"}
            to="/Store">
            Store
          </Link>
          <Link
            onClick={() => handleActivePaage("Blog")}
            className={ActivePage === "Blog" ? "nav-item active" : "nav-item"}
            to="/Blog">
            Blog
          </Link>
          <Link
            onClick={() => handleActivePaage("About")}
            className={ActivePage === "About" ? "nav-item active" : "nav-item"}
            to="/About">
            About Us
          </Link>
          <Link
            onClick={() => handleActivePaage("Contact")}
            className={
              ActivePage === "Contact" ? "nav-item active" : "nav-item"
            }
            to="/Contact">
            Contact Us
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
