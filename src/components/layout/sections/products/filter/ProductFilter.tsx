import SButtonSmall from "@/components/ui/SButtonSmall";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";

const ProductFilter = () => {
  return (
    <div>
      <h4 className="font-semibold md:text-xl">Filter Products</h4>
      <FilterByPrice />
      <FilterByCategory />
      <FilterByRating />
      <FilterByBrand />
      <div className="flex items-center gap-3 mt-6">
        <SButtonSmall fullWidth={true}>Filter</SButtonSmall>
        <SButtonSmall fullWidth={true}>Reset</SButtonSmall>
      </div>
    </div>
  );
};

export default ProductFilter;
