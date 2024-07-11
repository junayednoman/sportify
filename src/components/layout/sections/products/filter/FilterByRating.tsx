import { Checkbox } from "@/components/ui/checkbox";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const ratings = [5, 4, 3, 2, 1];

const FilterByRating = () => {
  return (
    <div className="mt-6">
      <h5 className="font-semibold">Rating</h5>
      {ratings.map((rating) => (
        <div key={rating} className="flex items-center space-x-2 mt-1">
          <Checkbox className="cursor-pointer" id={rating} />
          <label
            htmlFor={rating}
            className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            <Rating
              className="readonly_rating"
              emptySymbol={<FaRegStar style={{ color: "#83B828" }} size={15} />}
              fullSymbol={<FaStar style={{ color: "#83B828" }} size={15} />}
              initialRating={rating}
              readonly
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterByRating;
