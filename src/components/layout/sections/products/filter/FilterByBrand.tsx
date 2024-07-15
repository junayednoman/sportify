import SCheckbox from "@/components/ui/SCheckbox";
import { Dispatch } from "react";

const brands = ["Adidas", "Nike", "Puma", "Reebok", "Under Armour"];

type TBrandFilterProps = {
  selectedBrands: string[];
  setSelectedBrands: Dispatch<React.SetStateAction<string[]>>;
};

const FilterByBrand = ({
  selectedBrands,
  setSelectedBrands,
}: TBrandFilterProps) => {
  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="mt-6">
      <h5 className="font-semibold">Brand</h5>
      <div className="space-y-2 mt-2">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center space-x-2 mt-1">
            <SCheckbox
              className="cursor-pointer"
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
            />
            <label
              htmlFor={brand}
              className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByBrand;
