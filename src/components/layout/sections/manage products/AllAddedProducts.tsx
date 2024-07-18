import SButtonSmall from "@/components/ui/SButtonSmall";
import ProductPagination from "../products/ProductPagination";
import AddedProductItem from "./AddedProductItem";
import { useGetProductsQuery } from "@/redux/api/product/productApi";
import SLoading from "@/components/ux/SLoading";
import DataNotFound from "@/components/ux/DataNotFound";
import { TProduct } from "@/types";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error !== null && 'status' in error;
};

const AllAddedProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery(
    {
      limit: 4,
      fields: "image name quantity price category _id",
      sort: "-createdAt",
    },
    { pollingInterval: 30000 }
  );

  if (isLoading) {
    return <SLoading />;
  }
  if (error) {
    if (isFetchBaseQueryError(error)) {
      if (error.status === 404) {
        return <DataNotFound />;
      }
      return (
        <div>
          <h4 className="font-semibold md:text-2xl text-xl">
            Failed to fetch data!
          </h4>
        </div>
      );
    }
    return (
      <div>
        <h4 className="font-semibold md:text-2xl text-xl">
          An unexpected error occurred!
        </h4>
      </div>
    );
  }


  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="md:text-2xl font-semibold text-xl">All Products</h4>
        <a href="#addProduct">
          <SButtonSmall>Add Product</SButtonSmall>
        </a>
      </div>

      <div className="mt-8">
        <div className="md:p-4 p-3 bg-lightWhiteColor rounded-md grid md:grid-cols-6 grid-cols-5 items-center text-center gap-3 md:font-semibold">
          <h4 className=" text-left">Image</h4>
          <h4>Name</h4>
          <h4>Stock</h4>
          <h4 className="md:block hidden">Category</h4>
          <h4>Price</h4>
          <h4>Action</h4>
        </div>
        <div>
          {data.data.map((product: TProduct) => (
            <AddedProductItem key={product.name} product={product} />
          ))}
        </div>
        <ProductPagination />
        <div id="addProduct"></div>
      </div>
    </div>
  );
};

export default AllAddedProducts;
