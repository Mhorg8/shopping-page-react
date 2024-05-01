import Product from "./Product";

import { useContext } from "react";
import { MyContext } from "../../Context/Context";
const Products = () => {
  const { productDetails } = useContext(MyContext);

  return (
    <div className="container mt-20">
      <div>
        <h4 className="text-lg font-medium text-green">Our Products</h4>
        <h2 className="text-2xl font-bold">Explore our Products</h2>
      </div>

      <div className="grid grid-cols-12 w-full gap-x-5 gap-y-10">
        {productDetails.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
