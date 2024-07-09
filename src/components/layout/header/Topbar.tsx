import { MdOutlineEmail } from "react-icons/md";
import SContainer from "../SContainer";

const Topbar = () => {
  return (
    <div className="py-4 bg-lightGreenColor">
      <SContainer>
        <div className="flex items-center justify-between md:flex-row flex-col gap-4 ">
          <p className="font-medium md:text-base text-[15px]">
            Free Shipping on Orders Over $50 - Shop Now!
          </p>
          <div className="md:flex items-center gap-2 hidden">
            <MdOutlineEmail className="text-xl" />
            <p>ourshop@sportify.com</p>
          </div>
        </div>
      </SContainer>
    </div>
  );
};

export default Topbar;
