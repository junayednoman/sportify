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
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductFilter from "./filter/ProductFilter";
import { MdOutlineFilterAlt } from "react-icons/md";
import { ProductFilterQueryDataProps } from "@/types";

type TProductsSearcharProps = {
  setSearchText: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  setFilterQueryData: Dispatch<SetStateAction<ProductFilterQueryDataProps>>;
};

const ProductsSearchar = ({
  setFilterQueryData,
  setSearchText,
  sortBy,
  setSortBy,
}: TProductsSearcharProps) => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    setSearchText(input.value);
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
                <ProductFilter setFilterQueryData={setFilterQueryData} />
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
            name="search"
            className="lg:w-[240px] sm:w-[200px] w-full"
            placeholder="Search products..."
            type="text"
          />
          <div>
            <SButtonSmall>Search</SButtonSmall>
          </div>
        </form>
        <div className="lg:w-[135px] md:w-[140px] sm:w-[135px] w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-between items-center gap-2 border cursor-pointer bg-white p-2 px-3 rounded-md">
                <RxCaretSort className="text-xl" />
                <p className="text-sm">
                  {sortBy === "null"
                    ? "Sort by price"
                    : sortBy === "price"
                    ? "Low to high"
                    : "High to low"}
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort by price</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="price">
                  Low to high
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="-price">
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
