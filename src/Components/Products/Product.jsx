import PropTypes from "prop-types";
import Rating from "./Rating";

import { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
const Product = ({ product }) => {
  const { handleAddToCart, handleRemoveFromCart } = useContext(MyContext);
  const [openQuantity, setOpenQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function handleClick() {
    setOpenQuantity((prev) => !prev);
  }

  function addToCart(id) {
    setQuantity((prev) => prev + 1);
    handleAddToCart(id);
  }

  function removeFromCart(id) {
    setQuantity((prev) => prev - 1);
    handleRemoveFromCart(id);
  }
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 mt-10 rounded-md">
      <div className="bg-[#e4e4e4dd] cursor-pointer flex items-center justify-center w-full h-fit py-2 px-2 rounded-md">
        <img
          className="w-full h-[170px] object-contain scale-105 mx-auto"
          src={product.imgUrl}
          alt=""
        />
      </div>
      <div>
        <Rating products={product} />

        <div className="flex flex-col mt-3">
          <h2 className="font-bold text-xl mb-3">{product.productName}</h2>
          <div className="flex  items-center justify-between">
            {!openQuantity ? (
              <p className="font-medium ">{product.price}</p>
            ) : (
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-6 h-6 flex items-center justify-center bg-gray font-bold text-lg rounded-full">
                  +
                </button>
                <span>{quantity < 1 ? 0 : quantity}</span>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-6 h-6 flex items-center justify-center bg-gray font-bold text-lg rounded-full">
                  -
                </button>
              </div>
            )}

            <button
              onClick={() => handleClick()}
              className="font-semibold text-green hover:text-black ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
  openQuantity: PropTypes.bool,
  onAddCart: PropTypes.func,
};
export default Product;
