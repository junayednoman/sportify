import { FaStar, FaRegStar } from "react-icons/fa";

const SStarRating = ({ value }: { value: string | number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Number(value) ? (
            <FaStar className="text-primaryColor" />
          ) : (
            <FaRegStar className="text-primaryColor" />
          )}
        </span>
      ))}
    </div>
  );
};

export default SStarRating;
