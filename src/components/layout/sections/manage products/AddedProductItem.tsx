type TCartItemProps = {
  image: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
};

const AddedProductItem = ({
  image,
  name,
  quantity,
  price,
  category,
}: TCartItemProps) => {
  return (
    <div className="py-3 border-b px-3">
      <div className="grid grid-cols-5 items-center text-center gap-3">
        <div className="sm:w-[80px] w-[65px]">
          <img src={image} alt="" />
        </div>
        <h4 className="sm:text-base text-sm">{name}</h4>
        <p>{quantity}</p>
        <p>{category}</p>
        <h5>${price}</h5>
      </div>
    </div>
  );
};

export default AddedProductItem;
