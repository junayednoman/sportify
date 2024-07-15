import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../ui/sheet";
import CartItems from "./CartItems";

const CartModal = ({ children }: { children: ReactNode }) => {

  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer">{children}</div>
        </SheetTrigger>
        <SheetContent className="cart_modal" side="right">
          <h4 className="text-lg font-semibold">Your Cart</h4>
          <CartItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartModal;
