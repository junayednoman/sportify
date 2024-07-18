import { Link } from "react-router-dom";
import { TProduct } from "@/types";
import SStarRating from "@/components/ui/SStarRating";

const ProductCard = ({ product }: { product: TProduct }) => {
  const {
    name,
    category,
    quantity,
    brand,
    rating,
    price,
    description,
    image,
    tag,
    _id,
  } = product;
  return (
    <div className="border border-[#0000001d] rounded-md pt-1 cursor-pointer bg-white hover:border-primaryColor duration-200 ">
      <div className="relative">
        <img src={image} alt="" />
        {tag && (
          <span className="border-2 rounded-sm p-1 px-2 text-sm text-primaryColor border-primaryColor font-semibold absolute top-2 left-3 capitalize">
            {tag}
          </span>
        )}
      </div>
      <hr />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Link
            to={`/products/${category}`}
            className="text-[12px] text-gray-500 font-semibold uppercase cursor-pointer"
          >
            {category}
          </Link>
          <p className="font-semibold">{brand}</p>
        </div>
        <p className="text-sm mt-1">
          <strong>Stock: </strong>
          {quantity}
        </p>
        <h4 className="text-base capitalize font-semibold hover:text-primaryColor duration-200 my-2">
          <Link to={`/product/${_id}`}>{name}</Link>
        </h4>
        <p className="text-sm">
          {description!.length > 75 ? description!.slice(0, 75) : description}
          ...
        </p>
        <div className="flex items-center justify-between font-semibold my-2">
          <SStarRating value={rating!} />
          <p>${price}</p>
        </div>
        <Link
          className="bg-primaryColor px-5 py-2 rounded-md duration-200 hover:bg-blackColor w-full inline-block text-center text-white text-[15px]"
          to={`/product/${_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
