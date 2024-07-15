import SmallLoading from "@/components/ux/SmallLoading";
import { useUpdateCartProductQuantityMutation } from "@/redux/api/cart/cartApi";
import { getCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

type TCartItemProps = {
  image: string;
  name: string;
  quantity: number;
  price: number;
  productId: string;
};

const CheckOutProductItem = ({ product }: { product: TCartItemProps }) => {
  const { image, name, quantity, price, productId } = product;
  const [updateCartProductQuantity] = useUpdateCartProductQuantityMutation();
  const user = useAppSelector(getCurrentUser);
  const [loading, setLoading] = useState(false);

  const [quantityToUpdate, setQuantityToUpdate] = useState(quantity);


  // handle update cart product quantity
  const handleIncreaseQuantity = async (updatedQuantity: number) => {
    setLoading(true);
    setQuantityToUpdate(updatedQuantity);
    const pricePerProduct = price / quantity;
    const updatedPrice = pricePerProduct * updatedQuantity;
    const updatedData = {
      userId: user!.id,
      productId: productId,
      quantity: updatedQuantity,
      price: updatedPrice,
    };
    try {
      const res = await updateCartProductQuantity(updatedData).unwrap();
      console.log(res);
    } catch (error: any) {
      console.log(error.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-b py-3 pr-2">
      <div className="flex items-center gap-3">
        <div className="sm:w-[90px] w-[65px]">
          <img className="rounded-md" src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h4 className="text-[15px]">{name}</h4>
          <div className="bg-lightWhiteColor text-center grid grid-cols-3 rounded-sm items-center border w-[70px]">
            <p
              onClick={() => handleIncreaseQuantity(quantity - 1)}
              className="text-lg cursor-pointer border-r"
            >
              -
            </p>
            <p className="">
              {loading ? <SmallLoading width={20} /> : quantity}
            </p>
            <p
              onClick={() => handleIncreaseQuantity(quantity + 1)}
              className="text-lg cursor-pointer border-l"
            >
              +
            </p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <h5 className="text-[15px]">${price.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProductItem;
