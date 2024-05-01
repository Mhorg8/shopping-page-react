import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({ products }) => {
  function generateStars() {
    const stars = [];
    for (let i = 0; i < products.rate; i++) {
      stars.push(<FaStar color="gold" key={i} />);
    }
    return stars;
  }

  return (
    <div className="flex items-center gap-x-1 mt-3 cursor-pointer">
      {generateStars()}
    </div>
  );
};

Rating.propTypes = {
  products: PropTypes.object,
};

export default Rating;
