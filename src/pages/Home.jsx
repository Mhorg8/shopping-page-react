import Banner from "../Components/Banners/Banner";
import Category from "../Components/CategoryBox/Category";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
