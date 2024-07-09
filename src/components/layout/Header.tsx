import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import SContainer from "./SContainer";
import { MdOutlineEmail, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import SBadgeIcon from "../ui/SBadgeIcon";
const Header = () => {
  return (
    <header className="font-futura font-medium">
      <div className="py-4 bg-lightGreenColor">
        <SContainer>
          <div className=" flex items-center justify-between">
            <p className="font-medium">
              Free Shipping on Orders Over $50 - Shop Now!
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-xl" />
              <p>ourshop@sportify.com</p>
            </div>
          </div>
        </SContainer>
      </div>
      <div className="border-b">
        <SContainer>
          <div className="flex items-center justify-between py-6">
            <Link to={"/"}>
              <img className="w-[150px]" src={logo} alt="logo" />
            </Link>
            <div>
              <ul className="flex items-center gap-5 capitalize text-[15px]">
                <li>
                  <Link to={"/"}>home</Link>
                </li>
                <li>
                  <Link to={"/products"}>all products</Link>
                </li>
                <li>
                  <Link to={"/manage-products"}>manage products</Link>
                </li>
                <li>
                  <Link to={"/about"}>about us</Link>
                </li>
                <li>
                  <Link to={"/cart"}>cart</Link>
                </li>
              </ul>
            </div>
            <ul className="flex items-center gap-4 text-3xl">
              <li className="cursor-pointer">
                <SBadgeIcon icon={<MdOutlineFavoriteBorder />} value={"2"} />
              </li>
              <li className="cursor-pointer">
                <SBadgeIcon icon={<IoCartOutline />} value={"3"} />
              </li>
              <li className="cursor-pointer">
                <FaRegCircleUser />
              </li>
            </ul>
          </div>
        </SContainer>
      </div>
    </header>
  );
};

export default Header;
