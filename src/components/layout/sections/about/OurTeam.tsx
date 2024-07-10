import SectionHeader from "@/components/ui/SectionHeader";
import SectionContainer from "../../SectionContainer";
import TeamItem from "./TeamItem";
import ceoImage from "@/assets/images/ceo.jpg";
import pmImage from "@/assets/images/md.jpg";
import ctoImage from "@/assets/images/cto.jpg";
import SContainer from "../../SContainer";

const OurTeam = () => {
  return (
    <SectionContainer>
      <div className="bg-lightWhiteColor md:py-14 py-12">
        <SContainer>
          <SectionHeader title="Meet Our Team" align="center" />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <TeamItem image={ceoImage} name="Atik Hassan" designation="CEO" />
            <TeamItem
              image={pmImage}
              name="Shihab Uddin"
              designation="Product Manager"
            />
            <TeamItem image={ctoImage} name="Rahat Hassan" designation="CTO" />
          </div>
        </SContainer>
      </div>
    </SectionContainer>
  );
};

export default OurTeam;
