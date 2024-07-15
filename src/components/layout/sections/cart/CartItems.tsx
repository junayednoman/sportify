import { SheetClose } from "@/components/ui/sheet";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import SButtonSmall from "@/components/ui/SButtonSmall";
import { useAppSelector } from "@/redux/hooks";
import { getCarts } from "@/redux/features/cartSlice";
import { TCartProduct } from "@/types";

const CartItems = () => {
  const cart = useAppSelector(getCarts);
  let totalPrice = 0;
  cart.products.forEach((product: TCartProduct) => {
    totalPrice += product.price;
  });
  const vatIncludedPrice = totalPrice * 0.15 + totalPrice;

  if (cart.products.length === 0) {
    return (
      <p className="text-center font-semibold text-xl mt-12">Cart is empty!</p>
    );
  }
  return (
    <div className="mt-10 h-screen relative">
      <div className="pb-32 space-y-3">
        {cart.products.map((product) => (
          <CartItem product={product} />
        ))}
      </div>

      <div className="fixed sm:w-[550px] w-full right-0 bottom-0 py-6 px-5 bg-lightGreenColor flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-gray-500">
            Total: ${vatIncludedPrice.toFixed(2)} (15% VAT)
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
  );
};

export default CartItems;
