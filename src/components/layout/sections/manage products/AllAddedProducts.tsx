import SButtonSmall from "@/components/ui/SButtonSmall";
import ProductPagination from "../products/ProductPagination";
import AddedProductItem from "./AddedProductItem";

const AllAddedProducts = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="md:text-2xl font-semibold text-xl">All Products</h4>
        <a href="#addProduct">
          <SButtonSmall>Add Product</SButtonSmall>
        </a>
      </div>

      <div className="mt-8">
        <div className="p-4 bg-lightWhiteColor rounded-md grid grid-cols-5 items-center text-center gap-3">
          <h4 className="font-semibold text-left">Image</h4>
          <h4 className="font-semibold">Name</h4>
          <h4 className="font-semibold">Stock</h4>
          <h4 className="font-semibold">Category</h4>
          <h4 className="font-semibold">Price</h4>
        </div>
        <div>
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
          <AddedProductItem
            category="Football"
            name={"Goal Master Football"}
            quantity={23}
            price={246}
            image={
              "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713"
            }
          />
        </div>
        <ProductPagination />
        <div id="addProduct"></div>
      </div>
    </div>
  );
};

export default AllAddedProducts;
