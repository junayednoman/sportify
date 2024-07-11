import { MdClose } from "react-icons/md";

type TCartItemProps = {
  image: string;
  name: string;
  quantity: number;
  price: number;
};

const CartItem = ({ image, name, quantity, price }: TCartItemProps) => {
  return (
    <div className="border rounded-md p-2 sm:px-4 px-2">
      <div className="flex items-center gap-3">
        <div className="sm:w-[110px] w-[65px]">
          <img src={image} alt="" />
        </div>
        <div>
          <h4 className="font-semibold mb-1 sm:text-base text-sm">{name}</h4>
          <h5 className="font-semibold">${price}</h5>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <div className="bg-lightWhiteColor text-center sm:px-8 px-5 space-y-1 rounded-md">
            <p className="text-lg cursor-pointer px-1">+</p>
            <p>{quantity}</p>
            <p className="text-lg cursor-pointer px-1">-</p>
          </div>
          <MdClose className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
