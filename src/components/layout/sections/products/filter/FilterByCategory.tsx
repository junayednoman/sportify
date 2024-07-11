import { Checkbox } from "@/components/ui/checkbox";

const categories = ["Cricket", "football", "badminton", "basketball", "hockey"];

const FilterByCategory = () => {
  return (
    <div className="mt-8">
      <h5 className="font-semibold">Category</h5>

      <div className="space-y-3 mt-3">
        {categories.map((category, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <Checkbox className="cursor-pointer" id={category} />
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
