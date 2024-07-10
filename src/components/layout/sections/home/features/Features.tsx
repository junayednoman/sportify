import FeatureItem from "./FeatureItem";
import deliveryImage from "@/assets/images/fast.png";
import moneyImage from "@/assets/images/cash-on-delivery.png";
import supportImage from "@/assets/images/support.png";
import SectionContainer from "@/components/layout/SectionContainer";
import SContainer from "@/components/layout/SContainer";

const Features = () => {
  return (
    <div>
      <SectionContainer>
        <SContainer>
          <div className="flex justify-center items-center md:gap-8 gap-6 flex-wrap">
            <FeatureItem
              image={deliveryImage}
              heading={"fast delivery"}
              text={"Within 24 hours"}
            />
            <FeatureItem
              image={moneyImage}
              heading={"cash on delivery"}
              text={"pay after receiving"}
            />
            <FeatureItem
              image={supportImage}
              heading={"Customer support"}
              text={"Anytime from anywhere"}
            />
          </div>
        </SContainer>
      </SectionContainer>
    </div>
  );
};

export default Features;
