import SectionContainer from "@/components/layout/SectionContainer";
import AllProducts from "@/components/layout/sections/products/AllProducts";
import ProductsSearchar from "@/components/layout/sections/products/ProductsSearchBar";
import ProductsSidebar from "@/components/layout/sections/products/ProductsSidebar";
import SWideContainer from "@/components/layout/SWideContainer";
import SBradCrumbs from "@/components/ui/SBradCrumbs";
import { Helmet } from "react-helmet";

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
              <SBradCrumbs
                currentPage={"Products"}
                pages={[{ label: "Home", url: "/" }]}
              />
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
