import SmallLoading from "@/components/ux/SmallLoading";
import {
  useDeleteCartProductItemMutation,
  useUpdateCartProductQuantityMutation,
} from "@/redux/api/cart/cartApi";
import { getCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "sonner";

type TCartItemProps = {
  productId: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
};

const CartItem = ({ product }: { product: TCartItemProps }) => {
  const [updateCartProductQuantity] = useUpdateCartProductQuantityMutation();
  const [deleteCartProductItem] = useDeleteCartProductItemMutation();
  const user = useAppSelector(getCurrentUser);
  const [loading, setLoading] = useState(false);

  const { image, name, quantity, price, productId } = product;

  // handle update cart product quantity
  const handleIncreaseQuantity = async (updatedQuantity: number) => {
    setLoading(true);
    const pricePerProduct = price / quantity;
    const updatedPrice = pricePerProduct * updatedQuantity;
    const updatedData = {
      userId: user!.id,
      productId: productId,
      quantity: updatedQuantity,
      price: updatedPrice,
    };
    try {
      await updateCartProductQuantity(updatedData).unwrap();
    } catch (error: any) {
      console.log(error.data);
    } finally {
      setLoading(false);
    }
  };

  // handle delete product item from cart
  const handleDeleteProductItem = async () => {
    const loadingToast = toast.loading("Removing item...", {
      position: "top-right",
    });
    const updatedData = {
      userId: user?.id,
      productId: productId,
      quantity: quantity,
    };
    try {
      const res = await deleteCartProductItem(updatedData).unwrap();
      if (res.success) {
        toast.success("Item successfully removed from cart", {
          id: loadingToast,
        });
      }
    } catch (error: any) {
      console.log(error.data);
      toast.error(error.data.message || "Something went wrong!", {
        id: loadingToast,
      });
    }
  };
  return (
    <div className="border rounded-md p-2 sm:px-4 px-2">
      <div className="flex items-center gap-3">
        <div className="sm:w-[110px] w-[65px]">
          <img src={image} alt="" />
        </div>
        <div>
          <h4 className="font-semibold mb-1 sm:text-base text-sm">{name}</h4>
          <h5 className="font-semibold">${price.toFixed(1)}</h5>
        </div>
        <div className="ml-auto flex items-center gap-6">
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
          <MdClose
            onClick={handleDeleteProductItem}
            className="text-2xl cursor-pointer p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
