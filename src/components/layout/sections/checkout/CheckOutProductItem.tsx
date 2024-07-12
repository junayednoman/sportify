type TCartItemProps = {
  image: string;
  name: string;
  quantity: number;
  price: number;
};

const CheckOutProductItem = ({
  image,
  name,
  quantity,
  price,
}: TCartItemProps) => {
  return (
    <div className="border-b py-3 pr-2">
      <div className="flex items-center gap-3">
        <div className="sm:w-[90px] w-[65px]">
          <img className="rounded-md" src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h4 className="text-[15px]">{name}</h4>
          <div className="bg-lightWhiteColor text-center grid grid-cols-3 rounded-sm items-center border w-[70px]">
            <p className="text-lg cursor-pointer border-r">-</p>
            <p className="">{quantity}</p>
            <p className="text-lg cursor-pointer border-l">+</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <h5 className="text-[15px]">${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProductItem;
