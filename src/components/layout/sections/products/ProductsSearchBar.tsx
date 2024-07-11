import { RxCaretSort } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import SButtonSmall from "@/components/ui/SButtonSmall";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductFilter from "./filter/ProductFilter";
import { MdOutlineFilterAlt } from "react-icons/md";

const ProductsSearchar = () => {
  const [sortBy, setSortBy] = useState("");
  console.log(sortBy);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };
  return (
    <div className="bg-lightWhiteColor rounded-md p-6 border">
      <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-3">
        {/* filter for tablet and mobile start */}
        <div className="lg:hidden block sm:w-[100px] w-full">
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex justify-between items-center gap-4 bg-white rounded-md border p-2 px-3">
                <MdOutlineFilterAlt className="text-xl" />
                <p className="text-sm">Filter</p>
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <div>
                <ProductFilter />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* filter for tablet and mobile end */}

        <form
          onSubmit={handleSearch}
          className="flex items-center gap-3 md:w-[300px] sm:w-[280px] w-full"
        >
          <Input
            className="lg:w-[240px] sm:w-[200px] w-full"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            type="text"
          />
          <SButtonSmall>Search</SButtonSmall>
        </form>
        <div className="lg:w-[135px] md:w-[140px] sm:w-[135px] w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-between items-center gap-2 border cursor-pointer bg-white p-2 px-3 rounded-md">
                <RxCaretSort className="text-xl" />
                <p className="text-sm">Sort by price</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort by price</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="low to high">
                  Low to high
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="High to low">
                  High to low
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ProductsSearchar;
