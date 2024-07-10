import CommonBanner from "@/components/layout/CommonBanner";
import About from "@/components/layout/sections/about/About";
import { Helmet } from "react-helmet";
const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Sportify | Equip your game</title>
      </Helmet>
      <CommonBanner title="About Sportify" />
      <About />
    </div>
  );
};

export default AboutPage;
