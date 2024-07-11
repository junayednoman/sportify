import SContainer from "@/components/layout/SContainer";
import SectionContainer from "@/components/layout/SectionContainer";
import Features from "@/components/layout/sections/home/features/Features";
import ProductDetails from "@/components/layout/sections/single product/ProductDetails";
import SingleProductAdditionalInfo from "@/components/layout/sections/single product/SingleProductAdditionalInfo";
import SingleProductSideBar from "@/components/layout/sections/single product/SingleProductSideBar";
import SBradCrumbs from "@/components/ui/SBradCrumbs";
import { Helmet } from "react-helmet";

const SingleProduct = () => {
  return (
    <>
      <Helmet>
        <title>Pro Elite Cricket Bat - Sportify | Equip your game</title>
      </Helmet>
      <SContainer>
        <div>
          <SBradCrumbs
            currentPage={"Pro Elite Cricket Bat"}
            pages={[
              { label: "Home", url: "/" },
              { label: "Products", url: "/products" },
            ]}
          />
        </div>

        {/* product info */}
        <div className="grid grid-cols-4 xl:gap-6 lg:gap-4 gap-6 relative">
          <div className="col-span-3 rounded-md">
            <ProductDetails />
            <div className="mt-12">
              <SectionContainer>
                <SingleProductAdditionalInfo />
              </SectionContainer>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border rounded-md p-6">
              <SingleProductSideBar />
            </div>
          </div>
        </div>
      </SContainer>
      <SectionContainer>
        <Features />
      </SectionContainer>
    </>
  );
};

export default SingleProduct;
