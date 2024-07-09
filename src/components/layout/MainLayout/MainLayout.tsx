import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SContainer from "../SContainer";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SContainer>
        <div className="mt-12 min-h-[550px]">
          <Outlet />
        </div>
      </SContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
