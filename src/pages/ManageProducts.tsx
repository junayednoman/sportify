import SContainer from "@/components/layout/SContainer";
import SectionContainer from "@/components/layout/SectionContainer";
import AddProductForm from "@/components/layout/sections/manage products/AddProductForm";
import AllAddedProducts from "@/components/layout/sections/manage products/AllAddedProducts";
import SBradCrumbs from "@/components/ui/SBradCrumbs";
import { Helmet } from "react-helmet";

const ManageProducts = () => {
  return (
    <div>
      <Helmet>
        <title>Manage Products - Sportify | Equip your game</title>
      </Helmet>
      <SContainer>
        <SBradCrumbs
          pages={[{ label: "Home", url: "/" }]}
          currentPage="Manage Products"
        />
        <SectionContainer>
          <div className="space-y-12">
            <div className="border rounded-md p-6 xl:w-[90%]">
              <AllAddedProducts />
            </div>
            <div className="border rounded-md p-6 xl:w-[90%]">
              <AddProductForm />
            </div>
          </div>
        </SectionContainer>
      </SContainer>
    </div>
  );
};

export default ManageProducts;
