import successIcon from "@/assets/images/success.gif";
import SContainer from "@/components/layout/SContainer";
import SectionContainer from "@/components/layout/SectionContainer";
import SButton from "@/components/ui/SButton";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <SContainer>
      <SectionContainer>
        <div className="text-center">
          <img className="mx-auto mb-8" src={successIcon} alt="" />
          <h2 className="font-semibold text-5xl">Order Placed Successfully!</h2>
          <div className="mt-6 w-[600px] mx-auto">
            <p>
              Thank you for shopping with Sportify! Your order has been
              successfully placed and is now being processed. A confirmation
              email has been sent to you with the order details. If you have any
              questions or need further assistance, please feel free to contact
              our <strong>customer support.</strong>
            </p>
          </div>

          <div className="mt-8">
            <Link to={"/"}>
              <SButton>Go To Home</SButton>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </SContainer>
  );
};

export default OrderSuccess;
