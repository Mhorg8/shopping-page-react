import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className=" w-[85%] h-screen bg-green absolute left-0 top-0 mobile-menu animate-fadeIn">
      <ul className="flex flex-col items-center justify-center gap-y-10 h-full w-full">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/Store">
          Store
        </Link>
        <Link className="nav-item" to="/Blog">
          Blog
        </Link>
        <Link className="nav-item" to="/About">
          About Us
        </Link>
        <Link className="nav-item" to="/Contact">
          Contact Us
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
