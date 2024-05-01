import FooterItem from "./FooterItem";
const FooterAboutUs = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="footer-header">About US</h2>
      <ul className="flex flex-col gap-y-3 cursor-pointer">
        <FooterItem path="/" classList="nav-item">
          eTRADE App
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Responsible Disclosure
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Country Selector
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Student Discount
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          Careers
        </FooterItem>
        <FooterItem path="/" classList="nav-item">
          FeedBack
        </FooterItem>
      </ul>
    </div>
  );
};

export default FooterAboutUs;
