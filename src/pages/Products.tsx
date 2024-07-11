import SectionContainer from "@/components/layout/SectionContainer";
import AllProducts from "@/components/layout/sections/products/AllProducts";
import ProductsSearchar from "@/components/layout/sections/products/ProductsSearchBar";
import ProductsSidebar from "@/components/layout/sections/products/ProductsSidebar";
import SWideContainer from "@/components/layout/SWideContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Helmet>
        <title>All Products - Sportify | Equip your game</title>
      </Helmet>

      <>
        <SWideContainer>
          <SectionContainer>
            <div className="mb-12">
              <Breadcrumb>
                <BreadcrumbList className="text-base">
                  <BreadcrumbItem>
                    <Link to={"/"}>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Shop</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="grid grid-cols-4 xl:gap-6 lg:gap-4 gap-6 relative">
              <div className="col-span-1 lg:block hidden">
                <div className="sticky top-5 border p-7 rounded-md">
                  <ProductsSidebar />
                </div>
              </div>
              <div className="lg:col-span-3 col-span-4">
                <div className="xl:mb-6 mb-4">
                  <ProductsSearchar />
                </div>
                <AllProducts />
              </div>
            </div>
          </SectionContainer>
        </SWideContainer>
      </>
    </div>
  );
};

export default Products;
