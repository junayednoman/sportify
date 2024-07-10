import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SContainer from "../SContainer";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-futura">
      <Header />
      <SContainer>
        <div className="min-h-[550px]">
          <Outlet />
        </div>
      </SContainer>
      <Footer />
    </div>
  );
};

export default MainLayout;
