import SBadgeIcon from "@/components/ui/SBadgeIcon";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import CartModal from "../sections/cart/CartModal";
const SDesktopMenu = () => {
  return (
    <>
      <div className=" lg:block hidden">
        <div className="flex items-center gap-5 capitalize text-[15px] font-semibold">
          <Link to={"/"}>home</Link>
          <Link to={"/products"}>all products</Link>
          <Link to={"/manage-products"}>manage products</Link>
          <Link to={"/about"}>about us</Link>
          {/* <Link to={"/cart"}>cart</Link> */}
        </div>
      </div>
      <div className="lg:flex items-center gap-4 text-3xl hidden">
        <SBadgeIcon
          icon={<MdOutlineFavoriteBorder className="cursor-pointer" />}
          value={1}
        />

        <CartModal />

        <FaRegCircleUser />
      </div>
    </>
  );
};

export default SDesktopMenu;
