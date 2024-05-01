import FooterItem from "./FooterItem";
const FooterProducts = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="footer-header">PRODUCTS</h2>
      <ul className="flex flex-col gap-y-3 cursor-pointer">
        <FooterItem path="/" classList="nav-item">
          Phones
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Computers
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Monitor
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Consoles
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          HeadPhones
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Watches
        </FooterItem>
      </ul>
    </div>
  );
};

export default FooterProducts;
