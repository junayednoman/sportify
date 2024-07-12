import { HiBars3 } from "react-icons/hi2";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Link } from "react-router-dom";
import CartModal from "../sections/cart/CartModal";

const SMobileMenu = () => {
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <HiBars3 className="text-3xl" />
        </SheetTrigger>
        <SheetContent>
          <div>
            <ul className="space-y-3 capitalize text-[15px] text-right mt-8">
              <li>
                <SheetClose asChild>
                  <Link to={"/"}>home</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={"/products"}>all products</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={"/manage-products"}>manage products</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={"/about"}>about us</Link>
                </SheetClose>
              </li>
              <li>
                <CartModal>cart</CartModal>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={"/login"}>login</Link>
                </SheetClose>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SMobileMenu;
