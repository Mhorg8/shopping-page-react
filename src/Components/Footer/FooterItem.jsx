import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
const FooterItem = ({ children, path, classList }) => {
  return (
    <li className={`${classList}`}>
      <Link path={path}></Link>
      {children}
    </li>
  );
};
FooterItem.propTypes = {
  children: React.node,
  path: React.string,
  classList: React.string,
};
export default FooterItem;
