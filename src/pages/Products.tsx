import SectionContainer from "@/components/layout/SectionContainer";
import AllProducts from "@/components/layout/sections/products/AllProducts";
import ProductsSearchar from "@/components/layout/sections/products/ProductsSearchBar";
import ProductsSidebar from "@/components/layout/sections/products/ProductsSidebar";
import SWideContainer from "@/components/layout/SWideContainer";
import SBradCrumbs from "@/components/ui/SBradCrumbs";
import { useGetProductsQuery } from "@/redux/api/product/productApi";
import { ProductFilterQueryDataProps } from "@/types";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const Products = () => {
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("null");
  const [filterQueryData, setFilterQueryData] =
    useState<ProductFilterQueryDataProps>({});
  const productQuery = {
    searchTerm,
    sort: `${sortBy} -createdAt`,
    category: filterQueryData?.selectedCategories
      ? filterQueryData.selectedCategories
      : categoryName === "all"
      ? ""
      : categoryName,
    brand: filterQueryData?.selectedBrands
      ? filterQueryData.selectedBrands
      : "",
    rating: filterQueryData?.selectedRatings
      ? filterQueryData.selectedRatings
      : "",
    maxPrice: filterQueryData?.price ? filterQueryData.price : 100000,
    limit: 6,
  };
  const { data, isLoading, error } = useGetProductsQuery(productQuery, {
    pollingInterval: 30000,
  });
  // const productData = data?.data;

  return (
    <div>
      <Helmet>
        <title>All Products - Sportify | Equip your game</title>
      </Helmet>

      <>
        <SWideContainer>
          <SectionContainer>
            <div className="mb-12">
              <SBradCrumbs
                currentPage={"Products"}
                pages={[{ label: "Home", url: "/" }]}
              />
            </div>
            <div className="grid grid-cols-4 xl:gap-6 lg:gap-4 gap-6 relative">
              <div className="col-span-1 lg:block hidden">
                <div className="sticky top-5 border p-7 rounded-md">
                  <ProductsSidebar setFilterQueryData={setFilterQueryData} />
                </div>
              </div>
              <div className="lg:col-span-3 col-span-4">
                <div className="xl:mb-6 mb-4">
                  <ProductsSearchar
                    setFilterQueryData={setFilterQueryData}
                    setSearchText={setSearchTerm}
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                  />
                </div>
                <AllProducts
                  productData={data}
                  loading={isLoading}
                  error={error}
                />
              </div>
            </div>
          </SectionContainer>
        </SWideContainer>
      </>
    </div>
  );
};

export default Products;
