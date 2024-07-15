import { Dispatch, SetStateAction } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import SCheckbox from "@/components/ui/SCheckbox";
const ratings = [5, 4, 3, 2, 1];
type TRatingFilterProps = {
  selectedRatings: number[];
  setSelectedRatings: Dispatch<SetStateAction<number[]>>;
};

const FilterByRating = ({
  selectedRatings,
  setSelectedRatings,
}: TRatingFilterProps) => {
  const handleCheckboxChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((item) => item !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="mt-6">
      <h5 className="font-semibold">Rating</h5>
      {ratings.map((rating) => (
        <div key={rating} className="flex items-center space-x-2 mt-2">
          <SCheckbox
            className="cursor-pointer"
            id={rating.toString()}
            checked={selectedRatings.includes(rating)}
            onChange={() => handleCheckboxChange(rating)}
          />
          <label
            htmlFor={rating.toString()}
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
