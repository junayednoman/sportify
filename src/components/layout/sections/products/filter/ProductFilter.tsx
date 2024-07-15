import SButtonSmall from "@/components/ui/SButtonSmall";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductFilterQueryDataProps } from "@/types";

type TProductSideBarFilterProps = {
  setFilterQueryData: Dispatch<SetStateAction<ProductFilterQueryDataProps>>;
};

const ProductFilter = ({ setFilterQueryData }: TProductSideBarFilterProps) => {
  const [price, setPrice] = useState(700);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleFilter = () => {
    const query = {
      price,
      selectedCategories,
      selectedBrands,
      selectedRatings,
    };
    setFilterQueryData(query);
  };

  const handleClearFilter = () => {
    const query = {};
    setFilterQueryData(query);
  };
  return (
    <div>
      <h4 className="font-semibold md:text-xl">Filter Products</h4>
      <FilterByPrice setPrice={setPrice} price={price} />
      <FilterByCategory
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <FilterByRating
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
      />
      <FilterByBrand
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
      <div className="flex items-center gap-3 mt-6">
        <div onClick={handleFilter}>
          <SButtonSmall fullWidth={true}>Filter</SButtonSmall>
        </div>
        <div onClick={handleClearFilter}>
          <SButtonSmall fullWidth={true}>Clear filter</SButtonSmall>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
