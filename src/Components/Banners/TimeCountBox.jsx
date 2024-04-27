import PropTypes from "prop-types";
const TimeCountBox = ({ children, timeDownItem }) => {
  return (
    <div className="w-full max-w-[60px] flex items-center justify-center flex-col rounded-md shadow-md bg-white p-2">
      <h2 className="text-lg font-semibold">{timeDownItem}</h2>
      <p className="text-sm font-medium">{children}</p>
    </div>
  );
};
TimeCountBox.propTypes = {
  children: PropTypes.string,
  timeDownItem: PropTypes.string,
};
export default TimeCountBox;
