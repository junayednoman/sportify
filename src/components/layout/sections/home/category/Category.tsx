import SectionHeader from "@/components/ui/SectionHeader";
import cricketImg from "@/assets/images/cricket.png";
import footballImg from "@/assets/images/football.png";
import badmintonImg from "@/assets/images/badminton.png";
import basketballImg from "@/assets/images/basketball.png";
import CategoryItem from "./CategoryItem";
import SectionContainer from "@/components/layout/SectionContainer";
import SContainer from "@/components/layout/SContainer";

const Category = () => {
  return (
    <div>
      <SectionContainer>
        <SContainer>
          <SectionHeader title="Shop by category" align="center" />
          <div className="flex items-center gap-5  justify-center flex-wrap sm:flex-row flex-col">
            <div className="xl:w-[22%] lg:w-[23%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
              <CategoryItem
                category={"Cricket"}
                heading={"cricket goods"}
                image={cricketImg}
              />
            </div>
            <div className="xl:w-[22%] lg:w-[23%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
              <CategoryItem
                category={"Football"}
                heading={"football goods"}
                image={footballImg}
              />
            </div>
            <div className="xl:w-[22%] lg:w-[23%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
              <CategoryItem
                category={"Badminton"}
                heading={"badminton goods"}
                image={badmintonImg}
              />
            </div>
            <div className="xl:w-[22%] lg:w-[23%] md:w-[35%] sm:w-[40%] w-[70%] h-auto">
              <CategoryItem
                category={"Basketball"}
                heading={"basketball goods"}
                image={basketballImg}
              />
            </div>
          </div>
        </SContainer>
      </SectionContainer>
    </div>
  );
};

export default Category;
