import SContainer from "@/components/layout/SContainer";
import SectionContainer from "@/components/layout/SectionContainer";
import UpdateProductForm from "@/components/layout/sections/manage products/UpdateProductForm";

const ProductUpdate = () => {
  return (
    <div>
      <SContainer>
        <SectionContainer>
          <div className="md:p-6 p-4 bg-lightWhiteColor rounded-md">
            <UpdateProductForm />
          </div>
        </SectionContainer>
      </SContainer>
    </div>
  );
};

export default ProductUpdate;
