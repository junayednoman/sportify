import SButton from "@/components/ui/SButton";
import { Link } from "react-router-dom";
// import image from "../../../../assets/images/banner.jpg";
type TBannerItemProps = {
  heading: string;
  subHeading: string;
  btn: string;
  para: string;
  bgClass: string;
};
const BannerItem = ({
  heading,
  subHeading,
  btn,
  para,
  bgClass,
}: TBannerItemProps) => {
  return (
    <div className={`bg-cover bg-center rounded-md ${bgClass}`}>
      <div className="lg:p-24 md:py-12 md:pl-16 p-10 pl-6 lg:w-[70%] md:w-[80%] w-full text-white">
        <h1 className="lg:text-7xl md:text-6xl md:leading-[80px] text-[42px] leading-[53px] font-bold uppercase font-futura text-white lg:leading-[90px]">
          {heading}
        </h1>
        <h5 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 mt-3 text-white">
          {subHeading}
        </h5>
        <p className="text-white mb-8 md:text-base text-sm">{para}</p>
        <Link to={'/products/all'}>
          <SButton>{btn}</SButton>
        </Link>
      </div>
    </div>
  );
};

export default BannerItem;
