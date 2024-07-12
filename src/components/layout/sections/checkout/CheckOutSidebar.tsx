import { Checkbox } from "@/components/ui/checkbox";
import CheckOutProductItem from "./CheckOutProductItem";
import SButton from "@/components/ui/SButton";
import SButtonSmall from "@/components/ui/SButtonSmall";

const CheckOutSidebar = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl">Your Order</h4>

      <div className="space-y-3 mt-6 bg-white rounded-md p-5">
        <div className="flex items-center justify-between border-b-2 pb-3 px-2 mb-2">
          <h4 className="font-semibold">Product</h4>
          <h4 className="font-semibold">Subtotal</h4>
        </div>
        <div>
          <CheckOutProductItem
            name={"Goal Master Football"}
            quantity={3}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <CheckOutProductItem
            name={"Goal Master Football"}
            quantity={1}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
        </div>
        <div className="flex items-center justify-between pb-4 pt-1 border-b px-3">
          <h4 className="font-semibold">Subtotal</h4>
          <h4 className="font-semibold text-primaryColor text-[15px]">$2984</h4>
        </div>
        <div className="flex items-center justify-between pb-4 pt-1 border-b px-3">
          <h4 className="font-semibold">Shipping</h4>
          <h4 className="font-semibold text-primaryColor text-[15px]">$21</h4>
        </div>
        <div className="flex items-center justify-between pb-1 pt-1 px-3">
          <h4 className="font-semibold text-lg">Total</h4>
          <h4 className="font-semibold text-primaryColor text-lg">$3002</h4>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-md p-5">
        <p className="text-sm mb-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{"  "}
          <a href="#" className="font-semibold">
            privacy policy.
          </a>
        </p>
        <div className="flex items-center space-x-2 mb-3">
          <Checkbox id="cash_on_delivery" />
          <label
            htmlFor="cash_on_delivery"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            I have read and agree to the website{" "}
            <a href="#" className="font-semibold">
              terms and conditions *
            </a>
          </label>
        </div>
        <SButtonSmall fullWidth={true}>Place Order</SButtonSmall>
      </div>
    </div>
  );
};

export default CheckOutSidebar;
