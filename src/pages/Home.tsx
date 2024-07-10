import Banner from "@/components/layout/sections/Banner";
import Featured from "@/components/layout/sections/featured/Featured";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sportify | Equip your game</title>
      </Helmet>
      <Banner />
      <Featured />
    </div>
  );
};

export default Home;
