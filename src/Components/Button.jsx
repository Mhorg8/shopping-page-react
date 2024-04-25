import { PropTypes } from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";

const Button = ({ children }) => {
  return (
    <button className="primary-btn ">
      <MdOutlineShoppingCart size={20} letterSpacing={1} />
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
