import FooterItem from "./FooterItem";

const FooterSupports = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="footer-header">SUPPORT</h2>
      <ul className="flex flex-col gap-y-3 cursor-pointer">
        <FooterItem path="/" classList="nav-item">
          Help
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Shipping
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Order Tracker
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Store Locater
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Gift Card Balance
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Returns & Exchanges
        </FooterItem>
      </ul>
    </div>
  );
};

export default FooterSupports;
