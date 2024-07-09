import { Outlet } from "react-router-dom";
import Header from "../Header";
import SContainer from "../SContainer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SContainer>
        <div className="mt-12">
          <Outlet />
        </div>
      </SContainer>
    </>
  );
};

export default MainLayout;
