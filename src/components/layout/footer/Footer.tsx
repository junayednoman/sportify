import { Link } from "react-router-dom";
import SContainer from "../SContainer";
import logo from "@/assets/images/logo.png";
import SSocialIcons from "@/components/ui/SSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import FooterCopyright from "./FooterCopyright";
import CartModal from "../sections/cart/CartModal";

const Footer = () => {
  return (
    <div className="pt-14 bg-lightWhiteColor">
      <SContainer>
        <div className="flex justify-between w-full flex-wrap md:gap-6 gap-7">
          <div className="xl:w-[30%] lg:w-[22%] w-full md:w-[48%]">
            <Link to={"/"}>
              <img
                className="lg:w-[150px] md:w-[130px] w-[110px]"
                src={logo}
                alt="logo"
              />
            </Link>
            <p className="text-sm mt-3">
              Sportify is your ultimate destination for high-quality sports
              goods and accessories. Whether you're into cricket, football,
              basketball, or golf we have the gear to elevate your game.
            </p>
          </div>
          <div className="capitalize md:w-[48%] xl:w-[20%] lg:w-[22%] w-full">
            <h4 className="lg:text-2xl font-semibold mb-3 text-xl">
              important links
            </h4>
            <div className="flex flex-col font-medium gap-1 lg:text-base text-sm">
              <Link to={"/products"}>all products</Link>
              <Link to={"/manage-products"}>manage products</Link>
              <Link to={"/about"}>about us</Link>
              <CartModal>cart</CartModal>
            </div>
          </div>
          <div className="capitalize md:w-[48%] xl:w-[20%] lg:w-[22%] w-full">
            <h4 className="lg:text-2xl font-semibold mb-3 text-xl">Legal</h4>
            <div className="flex flex-col font-medium gap-1 lg:text-base text-sm">
              <Link to={"/products"}>terms & conditions</Link>
              <Link to={"/manage-products"}>privacy policy</Link>
              <Link to={"/about"}>return policy</Link>
            </div>
          </div>
          <div className="capitalize md:w-[48%] xl:w-[20%] lg:w-[22%] w-full">
            <h4 className="lg:text-2xl font-semibold mb-4 text-xl">
              get in touch
            </h4>
            <div className="my-4 space-y-2 mb-6 lg:text-base text-sm">
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-xl" />
                <p>ourshop@sportify.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl" />
                <p>+880 13409-39035</p>
              </div>
            </div>
            <SSocialIcons />
          </div>
        </div>
      </SContainer>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
