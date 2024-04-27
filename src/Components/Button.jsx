import { PropTypes } from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";

const Button = ({ children, bgColor = "#284b63" }) => {
  return (
    <button className={bgColor ? "secondary-btn" : "primary-btn"}>
      <MdOutlineShoppingCart size={20} letterSpacing={1} />
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Button;
