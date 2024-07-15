import { TProduct } from "@/types";
import ProductCard from "../../product card/ProductCard";
import ProductPagination from "./ProductPagination";
import SLoading from "@/components/ux/SLoading";
import DataNotFound from "@/components/ux/DataNotFound";

type TAllProductProps = {
  productData: any;
  loading: boolean;
  error: any;
};

const AllProducts = ({ productData, loading, error }: TAllProductProps) => {
  if (loading) {
    return <SLoading />;
  }
  if (error) {
    if (error.status === 404) {
      return <DataNotFound />;
    }
    return (
      <div>
        <h4 className="font-semibold md:text-2xl text-xl">
          Failed to fetch data!
        </h4>
        ;
      </div>
    );
  }
  const products: TProduct[] = productData.data;
  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:gap-6 lg:gap-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <ProductPagination />
    </div>
  );
};

export default AllProducts;
