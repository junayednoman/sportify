import SContainer from "@/components/layout/SContainer";
import BillingInfoForm from "@/components/layout/sections/checkout/BillingInfoForm";
import CheckOutSidebar from "@/components/layout/sections/checkout/CheckOutSidebar";
import PaymentInformation from "@/components/layout/sections/checkout/PaymentInformation";
import SBradCrumbs from "@/components/ui/SBradCrumbs";
import { Helmet } from "react-helmet";

const Checkout = () => {
  return (
    <div className="lg:mb-16 md:mb-12 mb-8">
      <Helmet>
        <title>Checkout - Sportify | Equip your game</title>
      </Helmet>

      <SContainer>
        <SBradCrumbs
          pages={[{ label: "Home", url: "/" }]}
          currentPage="checkout"
        />
        <div className="grid grid-cols-5 gap-6">
          <div className="lg:col-span-3 col-span-5">
            <div className="border rounded-md md:p-6 p-4 py-5">
              <BillingInfoForm />
              <div className="md:mt-9 mt-7">
                <PaymentInformation />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <div className="rounded-md md:p-6 p-4 py-5 bg-lightWhiteColor">
              <CheckOutSidebar />
            </div>
          </div>
        </div>
      </SContainer>
    </div>
  );
};

export default Checkout;
