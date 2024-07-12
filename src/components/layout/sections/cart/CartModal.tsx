import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../../../ui/sheet";
import CartItem from "./CartItem";
import SButtonSmall from "@/components/ui/SButtonSmall";
import { Link } from "react-router-dom";

const CartModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer">{children}</div>
        </SheetTrigger>
        <SheetContent className="cart_modal" side="right">
          <h4 className="text-lg font-semibold">Your Cart</h4>
          <div className="mt-10 h-screen relative">
            <div className="pb-32 space-y-3">
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

            <div className="fixed sm:w-[550px] w-full right-0 bottom-0 py-6 px-5 bg-lightGreenColor flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-500">
                  Subtotal: ${1023}
                </h4>
              </div>
              <div>
                <SheetClose asChild>
                  <Link to={"/checkout"}>
                    <SButtonSmall>Proceed To Checkout</SButtonSmall>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartModal;
