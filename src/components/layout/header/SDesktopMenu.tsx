import SBadgeIcon from "@/components/ui/SBadgeIcon";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import CartModal from "../sections/cart/CartModal";
import { IoCartOutline } from "react-icons/io5";
import { getCurrentUser } from "@/redux/features/authSlice";
import { useGetCartQuery } from "@/redux/api/cart/cartApi";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
const SDesktopMenu = () => {
  const user = useAppSelector(getCurrentUser);
  const { data, isSuccess } = useGetCartQuery(user?.id);
  const cartInfo = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  if (isSuccess) {
    
    dispatch(
      setCart({ products: data.data.products, user: data.data.user.email })
    );
  }

  return (
    <>
      <div className=" lg:block hidden">
        <div className="flex items-center gap-5 capitalize text-[15px] font-semibold">
          <Link to={"/"}>home</Link>
          <Link to={"/products/all"}>all products</Link>
          <Link to={"/manage-products"}>manage products</Link>
          <Link to={"/about"}>about us</Link>
          <CartModal>cart</CartModal>
        </div>
      </div>
      <div className="lg:flex items-center gap-4 text-3xl hidden">
        <SBadgeIcon
          icon={<MdOutlineFavoriteBorder className="cursor-pointer" />}
          value={0}
        />

        <CartModal>
          <SBadgeIcon
            icon={<IoCartOutline />}
            value={cartInfo.products.length}
          />
        </CartModal>

        <Link to={"/login"}>
          <FaRegCircleUser />
        </Link>
      </div>
    </>
  );
};

export default SDesktopMenu;
