import SectionHeader from "@/components/ui/SectionHeader";
import cricketImg from "@/assets/images/cricket.png";
import footballImg from "@/assets/images/football.png";
import badmintonImg from "@/assets/images/badminton.png";
import basketballImg from "@/assets/images/basketball.png";
import CategoryItem from "./CategoryItem";
import SectionContainer from "@/components/layout/SectionContainer";

const Category = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader title="Shop by category" align="center" />
        <div className="flex items-center gap-6 justify-center flex-wrap sm:flex-row flex-col">
          <div className="xl:w-[15%] lg:w-[22%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
            <CategoryItem heading={"cricket accesories"} image={cricketImg} />
          </div>
          <div className="xl:w-[15%] lg:w-[22%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
            <CategoryItem heading={"football goods"} image={footballImg} />
          </div>
          <div className="xl:w-[15%] lg:w-[22%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
            <CategoryItem
              heading={"badminton accesories"}
              image={badmintonImg}
            />
          </div>
          <div className="xl:w-[15%] lg:w-[22%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
            <CategoryItem heading={"basketball goods"} image={basketballImg} />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Category;
