import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import SContainer from "../SContainer";
import SMobileMenu from "./SMobileMenu";
import SDesktopMenu from "./SDesktopMenu";
import Topbar from "./Topbar";
const Header = () => {
  return (
    <header className="font-futura font-medium">
      {/* topbar */}
      <Topbar />
      <div className="border-b">
        <SContainer>
          <div className="flex items-center justify-between md:py-6 py-4">
            <Link to={"/"}>
              <img
                className="lg:w-[150px] md:w-[130px] w-[110px]"
                src={logo}
                alt="logo"
              />
            </Link>
            {/* mobile menu */}
            <SMobileMenu />

            {/* tablet and desktop menu */}
            <SDesktopMenu />
          </div>
        </SContainer>
      </div>
    </header>
  );
};

export default Header;
