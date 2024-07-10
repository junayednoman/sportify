import { Link } from "react-router-dom";

type TCategoryItemProps = {
  image: string;
  heading: string;
};

const CategoryItem = ({ image, heading }: TCategoryItemProps) => {
  return (
    <div className="rounded-md p-7 text-center cursor-pointer">
      <Link to={"/"}>
        <img className="max-w-[60px] mx-auto" src={image} alt="" />
        <h4 className="lg:text-lg font-semibold mt-4 capitalize">{heading}</h4>
      </Link>
    </div>
  );
};

export default CategoryItem;
