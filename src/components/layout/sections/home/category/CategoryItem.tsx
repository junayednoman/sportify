import { Link } from "react-router-dom";

type TCategoryItemProps = {
  image: string;
  heading: string;
  category: string;
};

const CategoryItem = ({ image, heading, category }: TCategoryItemProps) => {
  return (
    <Link to={`/products/${category}`}>
      <div className="rounded-md p-7 text-center cursor-pointer bg-lightGreenColor hover:bg-lightWhiteColor hover:border-primaryColor border duration-200">
        <Link to={`/products/${category}`}>
          <img className="max-w-[60px] mx-auto" src={image} alt="" />
          <h4 className="lg:text-lg font-semibold mt-4 capitalize">
            {heading}
          </h4>
        </Link>
      </div>
    </Link>
  );
};

export default CategoryItem;
