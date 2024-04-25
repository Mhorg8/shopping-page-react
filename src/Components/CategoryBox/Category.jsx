import CategoryContent from "./CategoryContent";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";
const Category = () => {
  const { categories } = useContext(MyContext);

  return (
    <div className="container w-full mt-20">
      <div className="mb-7">
        <h2 className="font-bold text-2xl">Browse by Category</h2>
      </div>
      <div className="grid grid-cols-6 gap-x-5 gap-y-5">
        {categories.map((item) => (
          <div
            className="col-span-3 md:col-span-2 lg:col-span-1 flex items-center justify-center category-item px-4 py-2 cursor-pointer text-center animate-fadeIn"
            key={item.id}>
            <CategoryContent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
