import { Dispatch, SetStateAction } from "react";
import ProductFilter from "./filter/ProductFilter";
import { ProductFilterQueryDataProps } from "@/types";
type TProductSideBarProps = {
  setFilterQueryData: Dispatch<SetStateAction<ProductFilterQueryDataProps>>;
};
const ProductsSidebar = ({
  setFilterQueryData,
}: TProductSideBarProps) => {
  return (
    <div>
      <ProductFilter
        setFilterQueryData={setFilterQueryData}
      />
    </div>
  );
};

export default ProductsSidebar;
