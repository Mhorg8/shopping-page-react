import Button from "../Button";
import TimeDownCount from "./TimeDownCout";
const BannerTextContent = () => {
  return (
    <div className="w-full flex flex-col py-10">
      <h4 className="text-lg text-blue font-medium">Headphone</h4>
      <h2 className="text-[48px] font-medium leading-[50px]">
        Enhance Your <br />
        Music Experience
      </h2>

      <div className="flex flex-col gap-y-5 my-10">
        <TimeDownCount />
        <Button>Check It Out</Button>
      </div>
    </div>
  );
};

export default BannerTextContent;
