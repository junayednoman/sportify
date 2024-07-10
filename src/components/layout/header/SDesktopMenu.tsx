import SBadgeIcon from "@/components/ui/SBadgeIcon";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const SDesktopMenu = () => {
  return (
    <>
      <div className=" lg:block hidden">
        <div className="flex items-center gap-5 capitalize text-[15px] font-semibold">
          <Link to={"/"}>home</Link>
          <Link to={"/products"}>all products</Link>
          <Link to={"/manage-products"}>manage products</Link>
          <Link to={"/about"}>about us</Link>
          <Link to={"/cart"}>cart</Link>
        </div>
      </div>
      <ul className="lg:flex items-center gap-4 text-3xl hidden">
        <li className="cursor-pointer">
          <SBadgeIcon icon={<MdOutlineFavoriteBorder />} value={1} />
        </li>
        <li className="cursor-pointer">
          <SBadgeIcon icon={<IoCartOutline />} value={3} />
        </li>
        <li className="cursor-pointer">
          <FaRegCircleUser />
        </li>
      </ul>
    </>
  );
};

export default SDesktopMenu;
