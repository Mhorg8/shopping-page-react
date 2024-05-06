import Banner from "../Components/Banners/Banner";
import Category from "../Components/CategoryBox/Category";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import Basket from "../Components/ShoppingBasket/Basket";
const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Category />
      <Banner />
      <Products />
      <Footer />
      <Basket />
    </div>
  );
};

export default Home;
