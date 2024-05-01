import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import FooterProducts from "./FooterProducts";
import FooterAboutUs from "./FooterAboutUs";
import FooterSupports from "./FooterSupports";

const Footer = () => {
  return (
    <footer className="container w-full grid grid-cols-12 mt-20 gap-y-10">
      <div
        className="col-span-12 md:col-span-4 flex flex-col gap-y-5 items-start justify-start order-2 md:order-1
      ">
        <h2 className="footer-header">Follow us</h2>
        <div className="flex gap-x-5 items-start justify-start w-full cursor-pointer">
          <FaInstagram size={26} className="social-icons" />
          <FaPinterestP size={26} className="social-icons" />
          <FaTiktok size={26} className="social-icons" />
          <FaFacebookF size={26} className="social-icons" />
        </div>
        <p className="w-1/2 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nostrum.
        </p>
      </div>

      <div
        className="col-span-12 md:col-span-8 flex flex-wrap items-start justify-between order-1 md:order-2
      ">
        <FooterSupports />
        <FooterAboutUs />
        <FooterProducts />
      </div>
    </footer>
  );
};

export default Footer;
