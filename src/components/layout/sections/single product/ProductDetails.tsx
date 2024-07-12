import { Input } from "@/components/ui/input";
import SButton from "@/components/ui/SButton";
import { calculateDiscount } from "@/lib/utils";
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const product = {
  name: "Pro Elite Cricket Bat",
  category: "Cricket",
  quantity: 20,
  brand: "Sportify",
  rating: 4.5,
  price: 150.0,
  description:
    "The Pro Elite Cricket Bat is crafted from premium English willow, designed for players who demand power and precision. Its lightweight build and robust sweet spot ensure exceptional performance, whether you're playing in a local match or on the professional stage. The bat features a sleek design, superior grip, and outstanding balance, making it a top choice for cricket enthusiasts.",
  image:
    "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
  tag: "7% Off",
  discount: 7,
};

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
const ProductDetails = () => {
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
    discount,
  } = product;
  return (
    <div>
      <div className="grid grid-cols-2 gap-9">
        <div className="p-5 border rounded-md mr-3 relative">
          <div className="absolute top-3 left-5 bg-primaryColor text-white p-2 px-[9px] rounded-full">
            <FaRegEye className="text-xl" />
          </div>
          <PhotoProvider>
            <div className="cursor-pointer">
              <PhotoView src={image}>
                <img src={image} alt="" />
              </PhotoView>
            </div>
          </PhotoProvider>
        </div>
        <div className="space-y-5">
          <div className="inline-block p-2 px-3 rounded-md bg-lightGreenColor text-sm font-semibold">
            <p>{tag}</p>
          </div>
          <h3 className="text-4xl font-semibold capitalize">{name}</h3>
          {/* showing rating */}
          <div className="flex items-center gap-2">
            <Rating
              className="readonly_rating"
              emptySymbol={<FaRegStar style={{ color: "#83B828" }} size={19} />}
              fullSymbol={<FaStar style={{ color: "#83B828" }} size={19} />}
              initialRating={rating}
              readonly
            />
            <p className="text-sm text-gray-400">(32 reviews)</p>
          </div>
          {/* product price */}
          <div className="py-2 flex items-center gap-3">
            <h3 className="text-5xl font-semibold text-primaryColor">
              ${discount ? calculateDiscount(price, discount) : price}
            </h3>
            {discount > 0 && (
              <div>
                <p className="text-sm">{discount}% Off</p>
                <p className="line-through font-semibold text-gray-500">
                  ${price}
                </p>
              </div>
            )}
          </div>
          {/* description */}
          <p>
            {description.length > 150 ? description.slice(0, 150) : description}
            ...
          </p>
          {/* other info */}
          <div>
            <p>
              <strong>Stock Quantity: </strong>
              {quantity}
            </p>
            <p>
              <strong>Brand: </strong>
              {brand}
            </p>
          </div>

          {/* add to cart button and quantity selection */}
          <div className="flex items-center gap-2">
            <div>
              <Input
                type="number"
                defaultValue={1}
                className="w-[50px] text-center text-[15px] h-[46px]"
              />
            </div>
            <div>
              <SButton>Add To Cart</SButton>
            </div>
            <div className="border p-3 cursor-pointer rounded-md inline-block hover:border-primaryColor hover:bg-primaryColor duration-200 hover:text-white">
              <MdOutlineFavoriteBorder className="text-2xl" />
            </div>
          </div>
          <Link
            to={`/category/${category.toLocaleLowerCase()}`}
            className="text-[12px] text-gray-500 font-semibold uppercase cursor-pointer mt-6 inline-block"
          >
            <strong className="capitalize">Category:</strong> {category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
