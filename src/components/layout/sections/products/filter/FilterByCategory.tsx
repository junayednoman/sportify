import { Dispatch } from "react";

const categories = ["Cricket", "Football", "Badminton", "Basketball", "Hockey"];
type TFilterByCategoryProps = {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<React.SetStateAction<string[]>>;
};
const FilterByCategory = ({
  selectedCategories,
  setSelectedCategories,
}: TFilterByCategoryProps) => {
  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="mt-8">
      <h5 className="font-semibold">Category</h5>

      <div className="space-y-3 mt-3">
        {categories.map((category, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="cursor-pointer h-[16px] w-[16px] rounded-sm"
            />
            <label
              htmlFor={category}
              className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategory;
