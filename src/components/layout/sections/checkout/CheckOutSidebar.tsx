import { useAppSelector } from "@/redux/hooks";
import CheckOutProductItem from "./CheckOutProductItem";
import PaymentInformation from "./PaymentInformation";
import { getCarts } from "@/redux/features/cartSlice";
import { TCartProduct } from "@/types";

const CheckOutSidebar = () => {
  const cart = useAppSelector(getCarts);
  const products = cart.products;
  // calculate price
  let totalPrice = 0;
  cart.products.forEach((product: TCartProduct) => {
    totalPrice += product.price;
  });
  const subTotal = totalPrice * 0.15 + totalPrice;
  const shippingCost = 18;
  const total = subTotal + shippingCost;
  return (
    <div>
      <h4 className="font-semibold text-xl">Your Order</h4>

      <div className="space-y-3 mt-6 bg-white rounded-md p-5">
        <div className="flex items-center justify-between border-b-2 pb-3 px-2 mb-2">
          <h4 className="font-semibold">Product</h4>
          <h4 className="font-semibold">Subtotal</h4>
        </div>
        <div>
          {products.length &&
            products.map((product) => (
              <CheckOutProductItem key={product.name} product={product} />
            ))}
        </div>
        <div className="flex items-center justify-between pb-4 pt-1 border-b px-3">
          <h4 className="font-semibold">Subtotal</h4>
          <h4 className="font-semibold text-primaryColor text-[15px]">${subTotal.toFixed(2)} (15% VAT)</h4>
        </div>
        <div className="flex items-center justify-between pb-4 pt-1 border-b px-3">
          <h4 className="font-semibold">Shipping</h4>
          <h4 className="font-semibold text-primaryColor text-[15px]">${shippingCost.toFixed(2)}</h4>
        </div>
        <div className="flex items-center justify-between pb-1 pt-1 px-3">
          <h4 className="font-semibold text-lg">Total</h4>
          <h4 className="font-semibold text-primaryColor text-lg">${total.toFixed(2)}</h4>
        </div>
      </div>

      <div className="md:mt-9 mt-7">
        <PaymentInformation />
      </div>
    </div>
  );
};

export default CheckOutSidebar;
