import { Checkbox } from "@/components/ui/checkbox";

const FilterByBrand = () => {
  return (
    <div className="mt-6">
      <h5 className="font-semibold">Brand</h5>
      <div className="flex items-center space-x-2 mt-1">
        <Checkbox className="cursor-pointer" id={"brand"} />
        <label
          htmlFor={"brand"}
          className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          Sportify
        </label>
      </div>
    </div>
  );
};

export default FilterByBrand;
