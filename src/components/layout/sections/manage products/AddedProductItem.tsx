type TCartItemProps = {
  image: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  _id: string;
};
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteProductMutation } from "@/redux/api/product/productApi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AddedProductItem = ({ product }: { product: TCartItemProps }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const { image, name, quantity, price, category, _id } = product;

  // handle delete product
  const handleDeleteProduct = async () => {
    const loadingToast = toast.loading("Deleting product...");

    try {
      const res = await deleteProduct(_id).unwrap();
      if (res.success) {
        toast.success("Product deleted successfully!", { id: loadingToast });
      }
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong!", {
        id: loadingToast,
      });
    }
  };
  return (
    <div className="py-3 border-b px-3">
      <div className="grid grid-cols-6 items-center text-center gap-3">
        <div className="sm:w-[80px] w-[65px]">
          <img src={image} alt="" />
        </div>
        <h4 className="sm:text-base text-sm">{name}</h4>
        <p>{quantity}</p>
        <p>{category}</p>
        <h5>${price}</h5>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                <BsThreeDotsVertical className="mx-auto text-lg cursor-pointer" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link to={`/update-product/${_id}`}>Update</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleDeleteProduct}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AddedProductItem;
