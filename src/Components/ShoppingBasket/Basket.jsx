import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/Context";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const Basket = () => {
  const { handleOpenShopList, openShopList, cartItems, productDetails } =
    useContext(MyContext);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    handleQuantity();
  }, [basketItems, cartItems]);

  function handleQuantity(e) {
    console.log(e);
  }

  useEffect(() => {
    const displayItemsOnBasket = () => {
      const items = [];
      for (const [itemId, quantity] of Object.entries(cartItems)) {
        const product = productDetails.find((product) => product.id === itemId);
        items.push({ product, quantity });
      }
      setBasketItems(items);
    };
    displayItemsOnBasket();
  }, [cartItems, productDetails]);

  return (
    <div
      className={
        openShopList
          ? "shoppingList active flex flex-col justify-start gap-y-5 py-20 md:w-[40%]"
          : "shoppingList flex flex-col justify-start gap-y-5 py-20"
      }>
      <div className="absolute top-5 right-5 cursor-pointer">
        <IoMdClose onClick={handleOpenShopList} size={28} color="white" />
      </div>

      {basketItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full bg-white py-2 px-2">
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
            <img
              className="w-full h-full object-cover"
              src={item.product.imgUrl}
              alt={item.product.productName}
            />
          </div>

          <div className="h-full flex flex-col items-start justify-start gap-y-3 gap-x-3">
            <h3 className="font-semibold text-xl text-black">
              {item.product.productName}
            </h3>
            <p className="font-semibold text-black">{item.product.price}$</p>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              onChange={(e) => handleQuantity(e)}
              type="number"
              className="bg-gray w-14 border-2 rounded-md pl-2"
              min={1}
              value={item.quantity} // Display the quantity
            />
            <div className="cursor-pointer">
              <AiOutlineDelete size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Basket.propTypes = {
  handleOpenShopList: PropTypes.func.isRequired,
  openShopList: PropTypes.bool.isRequired,
};

export default Basket;
