import Banner from "@/components/layout/sections/Banner";
import Category from "@/components/layout/sections/category/Category";
import Contact from "@/components/layout/sections/contact/Contact";
import Featured from "@/components/layout/sections/featured/Featured";
import Features from "@/components/layout/sections/features/Features";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sportify | Equip your game</title>
      </Helmet>
      <Banner />
      <Category />
      <Featured />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;
