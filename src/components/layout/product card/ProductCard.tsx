import { Button } from "@/components/ui/button";
import SButton from "@/components/ui/SButton";
import SButtonSmall from "@/components/ui/SButtonSmall";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
type TProductCardProps = {
  name: string;
  category: string;
  quantity: number;
  brand: string;
  rating: number;
  description: string;
  image: string;
  price: number;
  tag?: string;
  addTag?: string;
};

const ProductCard = ({
  name,
  category,
  quantity,
  brand,
  rating,
  price,
  description,
  image,
  tag,
  addTag,
}: TProductCardProps) => {
  return (
    <div className="border border-[#0000001d] rounded-md pt-1 cursor-pointer bg-white hover:border-primaryColor duration-200 ">
      <div className="relative">
        <img src={image} alt="" />
        {tag && (
          <span className="border-2 rounded-sm p-1 px-2 text-sm text-primaryColor border-primaryColor font-semibold absolute top-2 left-3 capitalize">
            {tag}
          </span>
        )}
        {addTag && (
          <span className="border-2 rounded-sm p-1 px-2 text-sm text-primaryColor border-primaryColor font-semibold absolute top-2 right-3 capitalize">
            {addTag}
          </span>
        )}
      </div>
      <hr />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Link
            to={`/category/${category.toLocaleLowerCase()}`}
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
          <Link to={`/products/${name}`}>{name}</Link>
        </h4>
        <p className="text-sm">
          {description.length > 75 ? description.slice(0, 75) : description}...
        </p>
        <div className="flex items-center justify-between font-semibold my-2">
          {/* <p>{rating}</p> */}
          <Rating
            className="readonly_rating"
            emptySymbol={<FaRegStar style={{ color: "#83B828" }} size={15} />}
            fullSymbol={<FaStar style={{ color: "#83B828" }} size={15} />}
            initialRating={rating}
            readonly
          />
          <p>${price}</p>
        </div>
        <SButtonSmall fullWidth={true}>View Details</SButtonSmall>
      </div>
    </div>
  );
};

export default ProductCard;
