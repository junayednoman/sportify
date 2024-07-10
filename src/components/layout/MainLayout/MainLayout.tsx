import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-futura">
      <Header />
      <div className="min-h-[550px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
