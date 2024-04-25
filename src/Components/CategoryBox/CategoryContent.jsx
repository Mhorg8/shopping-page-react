import PropTypes from "prop-types";
const CategoryContent = ({ item }) => {
  return (
    <div className="hover:text-green hover:scale-105">
      <img className="w-24 h-24 object-contain" src={item.imgUrl} alt="" />
      <p className="text-base font-medium ">{item.title}</p>
    </div>
  );
};
CategoryContent.propTypes = {
  item: PropTypes.object,
};
export default CategoryContent;
