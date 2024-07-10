import SectionHeader from "@/components/ui/SectionHeader";
import SectionContainer from "../../SectionContainer";
import cricketImg from "@/assets/images/cricket.png";
import footballImg from "@/assets/images/football.png";
import badmintonImg from "@/assets/images/badminton.png";
import basketballImg from "@/assets/images/basketball.png";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader title="Shop by category" align="center" />
        <div className="flex items-center gap-4 justify-center flex-wrap md:flex-row flex-col">
          <CategoryItem heading={"cricket accesories"} image={cricketImg} />
          <CategoryItem heading={"football goods"} image={footballImg} />
          <CategoryItem heading={"badminton accesories"} image={badmintonImg} />
          <CategoryItem heading={"basketball goods"} image={basketballImg} />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Category;
