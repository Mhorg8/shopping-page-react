import { useState } from "react";
import { createContext } from "react";
import { PropTypes } from "prop-types";

import img1 from "../assets/6.jpg";
import img2 from "../assets/5.jpg";
import img3 from "../assets/36.jpg";
import img4 from "../assets/7.jpg";
import img5 from "../assets/50.jpg";

import ProductsImages from "../assets/Products/Products";
import categoriesImg from "../assets/category";
export const MyContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [ActivePage, setActivePage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [titleName, setTitleName] = useState("Home");
  const [cartItems, setCartItems] = useState({});
  const [openShopList, setOpenShopList] = useState(false);

  const categories = [
    { id: 1, title: "Iphone", imgUrl: categoriesImg.iphone },
    { id: 2, title: "Computers", imgUrl: categoriesImg.computer },
    { id: 3, title: "Accessories", imgUrl: categoriesImg.accessories },
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
    { id: 5, name: "Kimia", imgUrl: img5, age: 25 },
  ];

  const productDetails = [
    {
      id: "1",
      productName: "Apple Watch",
      price: "890$",
      rate: 4,
      imgUrl: ProductsImages.appleWatch,
    },
    {
      id: 2,
      productName: "Galaxy Watch 6",
      price: "890$",
      rate: 3,
      imgUrl: ProductsImages.galaxyWatch6,
    },
    {
      id: "3",
      productName: "Apple Ipad Air",
      price: "900$",
      rate: 4,
      imgUrl: ProductsImages.appleIpadAir,
    },
    {
      id: "4",
      productName: "Apple Ipad Air",
      price: "1200$",
      rate: 5,
      imgUrl: ProductsImages.appleIpadAir,
    },
    {
      id: "5",
      productName: "Xbox series X",
      price: "800$",
      rate: 3,
      imgUrl: ProductsImages.xboxSeriesS,
    },
    {
      id: "6",
      productName: "Xbox series S",
      price: "1200$",
      rate: 5,
      imgUrl: ProductsImages.xboxSeriesX,
    },
    {
      id: "7",
      productName: "Galaxy Buds2",
      price: "1200$",
      rate: 5,
      imgUrl: ProductsImages.galaxyBuds2,
    },
    {
      id: "8",
      productName: "Galaxy BudsFe",
      price: "798$",
      rate: 5,
      imgUrl: ProductsImages.galaxyBudsFe,
    },
    {
      id: "9",
      productName: "Galaxy Smart Tag",
      price: "798$",
      rate: 5,
      imgUrl: ProductsImages.galaxySmartTag,
    },
    {
      id: "10",
      productName: "Galaxy S24",
      price: "1200$",
      rate: 5,
      imgUrl: ProductsImages.galaxyS24,
    },
    {
      id: "11",
      productName: "Apple Watch",
      price: "890$",
      rate: 2,
      imgUrl: ProductsImages.appleWatch,
    },
    {
      id: "12",
      productName: "Xbox series S",
      price: "1200$",
      rate: 5,
      imgUrl: ProductsImages.xboxSeriesX,
    },
  ];

  function handleActivePage(curr) {
    setActivePage(curr);
    setTitleName(curr);
  }

  function handleFilterItems(curr) {
    setSelectedCategory(curr);
  }

  function handleOpenShopList() {
    setOpenShopList((prev) => !prev);
  }

  function handleAddToCart(id) {
    if (!cartItems[id]) {
      handleOpenShopList(true);
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  }

  function handleRemoveFromCart(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    console.log(cartItems);
  }

  const contextValue = {
    handleAddToCart,
    handleActivePage,
    handleFilterItems,
    handleRemoveFromCart,
    handleOpenShopList,
    openShopList,
    productDetails,
    titleName,
    categories,
    userProfile,
    ActivePage,
    cartItems,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
