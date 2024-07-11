import { Sheet, SheetContent, SheetTrigger } from "../../../ui/sheet";
import SBadgeIcon from "@/components/ui/SBadgeIcon";
import { IoCartOutline } from "react-icons/io5";
import CartItem from "./CartItem";

const CartModal = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer">
            <SBadgeIcon icon={<IoCartOutline />} value={3} />
          </div>
        </SheetTrigger>
        <SheetContent className="cart_modal" side="right">
          <h4 className="text-lg font-semibold">Your Cart</h4>
          <div className="mt-14 space-y-3">
            <CartItem
              name={"Goal Master Football"}
              quantity={1}
              price={654}
              image={
                "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
              }
            />
            <CartItem
              name={"Goal Master Football"}
              quantity={2}
              price={504}
              image={
                "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
              }
            />
            <CartItem
              name={"Goal Master Football"}
              quantity={1}
              price={246}
              image={
                "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
              }
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartModal;
