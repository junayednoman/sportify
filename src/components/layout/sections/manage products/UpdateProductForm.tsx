import { FC, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SInput from "@/components/ui/SInput";
import { Textarea } from "@/components/ui/textarea";
import SButtonSmall from "@/components/ui/SButtonSmall";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/product/productApi";
import { toast } from "sonner";
import SBtnLoading from "@/components/ux/SBtnLoading";
import { useParams } from "react-router-dom";
import SLoading from "@/components/ux/SLoading";
import DataNotFound from "@/components/ux/DataNotFound";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === "object" && error !== null && "status" in error;
};

// Form values interface
export interface IFormInputs {
  name: string;
  category: string;
  quantity: number;
  brand: string;
  price: number;
  description?: string;
  image: string;
  rating: string;
  tag?: string;
  discount?: number;
  _id?: string;
}

// validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  category: yup.string().required("Category is required"),
  quantity: yup
    .number()
    .typeError("Quantity is required")
    .required("Quantity is required")
    .positive("Quantity must be a positive number"),
  brand: yup.string().required("Brand is required"),
  price: yup
    .number()
    .typeError("Price is required")
    .required("Price is required")
    .positive("Price must be a positive number"),
  rating: yup.string().required("Rating is required"),
  image: yup
    .string()
    .url("Image must be a valid URL")
    .required("Image URL is required"),
});

const UpdateProductForm: FC = () => {
  const { productId } = useParams();
  const {
    data: fetchedProductData,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId, { pollingInterval: 30000 });

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const [updateProduct] = useUpdateProductMutation();
  const [loading, setLoading] = useState(false);

  const handleAddProduct: SubmitHandler<IFormInputs> = async (data) => {
    setLoading(true);
    const toastLoading = toast.loading("Adding product...");
    data.discount = Number(data.discount);
    data._id = fetchedProductData.data._id;
    try {
      const res = await updateProduct(data).unwrap();
      if (res.success) {
        toast.success("Product updated successfully!", { id: toastLoading });
      }
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong!", {
        id: toastLoading,
      });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <SLoading />;
  }
  if (error) {
    if (isFetchBaseQueryError(error)) {
      if (error.status === 404) {
        return <DataNotFound />;
      }
      return (
        <div>
          <h4 className="font-semibold md:text-2xl text-xl">
            Failed to fetch data!
          </h4>
        </div>
      );
    }
    return (
      <div>
        <h4 className="font-semibold md:text-2xl text-xl">
          An unexpected error occurred!
        </h4>
      </div>
    );
  }

  const product = fetchedProductData.data;

  return (
    <div id="addProduct">
      <h4 className="md:text-2xl font-semibold text-xl">Update Product</h4>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleAddProduct)}
          className="mt-6"
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <SInput
              defaultValue={product.name}
              inputName="name"
              placeholder="Enter product name"
              label="Name*"
              error={methods.formState.errors.name}
            />
            <SInput
              defaultValue={product.category}
              inputName="category"
              placeholder="Enter product category"
              label="Category*"
              error={methods.formState.errors.category}
            />
            <SInput
              defaultValue={product.quantity}
              inputName="quantity"
              placeholder="Enter product quantity"
              label="Quantity*"
              type="number"
              error={methods.formState.errors.quantity}
            />
            <SInput
              defaultValue={product.brand}
              inputName="brand"
              placeholder="Enter product brand"
              label="Brand*"
              error={methods.formState.errors.brand}
            />
            <SInput
              defaultValue={product.price}
              inputName="price"
              placeholder="Enter product price"
              label="Price*"
              type="number"
              error={methods.formState.errors.price}
            />
            <SInput
              defaultValue={product.image}
              inputName="image"
              placeholder="Enter product image URL"
              label="Image URL*"
              error={methods.formState.errors.image}
            />
            <SInput
              defaultValue={product.rating}
              inputName="rating"
              placeholder="Enter product rating URL"
              label="Rating*"
              error={methods.formState.errors.rating}
            />
            <SInput
              defaultValue={product.tag}
              inputName="tag"
              placeholder="Enter product tag"
              label="Tag"
              error={methods.formState.errors.tag}
            />
            <SInput
              defaultValue={product.discount}
              inputName="discount"
              placeholder="Enter product discount"
              label="Discount (%)"
              type="number"
              error={methods.formState.errors.discount}
            />
          </div>
          <div className="mt-4 space-y-1">
            <label htmlFor="description" className="text-sm font-semibold">
              Description
            </label>
            <Textarea
              defaultValue={product.description}
              className="md:h-[180px] h-[120px]"
              id="description"
              {...methods.register("description")}
              placeholder="Write product description"
            />
            {methods.formState.errors.description && (
              <p className="text-red-500 text-xs">
                {methods.formState.errors.description?.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <SButtonSmall fullWidth={true}>
              {loading ? <SBtnLoading /> : "Update"}
            </SButtonSmall>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default UpdateProductForm;
