import { Input } from "@/components/ui/input";
import SButton from "@/components/ui/SButton";
import { calculateDiscount } from "@/lib/utils";
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import SectionContainer from "../../SectionContainer";
import SingleProductAdditionalInfo from "./SingleProductAdditionalInfo";
import SLoading from "@/components/ux/SLoading";
import DataNotFound from "@/components/ux/DataNotFound";
import { useAddCartMutation } from "@/redux/api/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import { getCurrentToken } from "@/redux/features/authSlice";
import { jwtDecode } from "jwt-decode";
import { TCart, TTokenPayload } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import SBtnLoading from "@/components/ux/SBtnLoading";

const ProductDetails = ({ getProduct }: { getProduct: any }) => {
  const [buyingQuantity, setBuyingQuantity] = useState(1);
  const token = useAppSelector(getCurrentToken);
  const [cartLoading, setCartLoading] = useState(false);
  const [addCart] = useAddCartMutation();
  const decoded: TTokenPayload = jwtDecode(token!);
  const { data, error, isLoading } = getProduct;

  if (isLoading) {
    return <SLoading />;
  }
  if (error) {
    if (error.status === 404) {
      return <DataNotFound />;
    }
    return (
      <div>
        <h4 className="font-semibold md:text-2xl text-xl">
          Failed to fetch data!
        </h4>
      </div>
    );
  }

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
    _id,
  } = data.data;


  // handle add to cart
  const handleAddToCart = async () => {
    setCartLoading(true);
    const totalPrice = discount
      ? calculateDiscount(price, discount) * buyingQuantity
      : price * buyingQuantity;

    const cartData: TCart = {
      user: decoded?.id,
      products: [
        {
          productId: _id,
          price: totalPrice,
          quantity: Number(buyingQuantity),
          image: image,
          name: name,
        },
      ],
    };
    try {
      const res = await addCart(cartData).unwrap();
      if (res.success) {
        toast.success(res.message || "Product added to cart successfully!");
        // }
      }
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong");
    } finally {
      setCartLoading(false);
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-9">
        <div className="p-5 border rounded-md mr-3 relative">
          <div className="absolute top-3 left-5 bg-primaryColor text-white p-2 px-[9px] rounded-full">
            <FaRegEye className="text-xl" />
          </div>
          <PhotoProvider>
            <div className="cursor-pointer">
              <PhotoView src={image}>
                <img className="mx-auto" src={image} alt="" />
              </PhotoView>
            </div>
          </PhotoProvider>
        </div>
        <div className="md:space-y-5 space-y-4">
          {tag && (
            <div className="inline-block p-2 px-3 rounded-md bg-lightGreenColor text-sm font-semibold">
              <p className="capitalize">{tag}</p>
            </div>
          )}
          <h3 className="md:text-4xl text-[27px] font-semibold capitalize">
            {name}
          </h3>
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
          <div className="md:py-2 flex md:flex-row flex-col md:items-center gap-3">
            <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor">
              ${discount ? calculateDiscount(price, discount) : price}
            </h3>
            {discount > 0 && (
              <div className="md:block hidden">
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
                onChange={(e) => setBuyingQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                className="w-[50px] text-center text-[15px] h-[46px]"
              />
            </div>
            <div
              onClick={handleAddToCart}
              className={`${quantity === 0 && "cursor-not-allowed"}`}
            >
              <SButton disable={quantity === 0}>
                {!cartLoading ? "Add To Cart" : <SBtnLoading />}
              </SButton>
            </div>
            <div className="border p-3 cursor-pointer rounded-md inline-block hover:border-primaryColor hover:bg-primaryColor duration-200 hover:text-white">
              <MdOutlineFavoriteBorder className="text-2xl" />
            </div>
          </div>
          <Link
            to={`/products/${category}`}
            className="text-[12px] text-gray-500 font-semibold uppercase cursor-pointer mt-6 inline-block"
          >
            <strong className="capitalize">Category:</strong> {category}
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <SectionContainer>
          <SingleProductAdditionalInfo description={description} />
        </SectionContainer>
      </div>
    </div>
  );
};

export default ProductDetails;
