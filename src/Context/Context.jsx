import { useState } from "react";
import { createContext } from "react";
import { PropTypes } from "prop-types";

import img1 from "../assets/6.jpg";
import img2 from "../assets/5.jpg";
import img3 from "../assets/36.jpg";
import img4 from "../assets/7.jpg";
import img5 from "../assets/50.jpg";

import categoriesImg from "../assets/category";
export const MyContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [ActivePage, setActivePage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [titleName, setTitleName] = useState("Home");

  function handleActivePaage(curr) {
    setActivePage(curr);
    setTitleName(curr);
  }

  function handleFilterItems(curr) {
    setSelectedCategory(curr);
  }

  console.log(selectedCategory);
  const categories = [
    { id: 1, title: "Iphone", imgUrl: categoriesImg.iphone },
    { id: 2, title: "Computers", imgUrl: categoriesImg.computer },
    { id: 3, title: "Acssories", imgUrl: categoriesImg.accessories },
    { id: 4, title: "Laptop", imgUrl: categoriesImg.laptop },
    { id: 5, title: "Monitor", imgUrl: categoriesImg.monitor },
    { id: 6, title: "Console", imgUrl: categoriesImg.console },
    // { id: 7, title: "Game", imgUrl: categoriesImg.game },
  ];

  const userProfile = [
    { id: 1, name: "Alex", imgUrl: img1, age: 21 },
    { id: 2, name: "Mark", imgUrl: img2, age: 22 },
    { id: 3, name: "Mohammad", imgUrl: img3, age: 23 },
    { id: 4, name: "Sarah", imgUrl: img4, age: 29 },
    { id: 5, name: "Kimiya", imgUrl: img5, age: 25 },
  ];

  const contextValue = {
    titleName,
    categories,
    userProfile,
    handleActivePaage,
    ActivePage,
    handleFilterItems,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
