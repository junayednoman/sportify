import { FC } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SInput from "@/components/ui/SInput";
import { Textarea } from "@/components/ui/textarea";
import SButtonSmall from "@/components/ui/SButtonSmall";

// Form values interface
interface IFormInputs {
  name: string;
  category: string;
  quantity: number;
  brand: string;
  price: number;
  description?: string;
  image: string;
  tag?: string;
  discount?: number;
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
  image: yup
    .string()
    .url("Image must be a valid URL")
    .required("Image URL is required"),
});

const AddProductForm: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div id="addProduct">
      <h4 className="md:text-2xl font-semibold text-xl">Add New Product</h4>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <SInput
              inputName="name"
              placeholder="Enter product name"
              label="Name*"
              error={methods.formState.errors.name}
            />
            <SInput
              inputName="category"
              placeholder="Enter product category"
              label="Category*"
              error={methods.formState.errors.category}
            />
            <SInput
              inputName="quantity"
              placeholder="Enter product quantity"
              label="Quantity*"
              type="number"
              error={methods.formState.errors.quantity}
            />
            <SInput
              inputName="brand"
              placeholder="Enter product brand"
              label="Brand*"
              error={methods.formState.errors.brand}
            />
            <SInput
              inputName="price"
              placeholder="Enter product price"
              label="Price*"
              type="number"
              error={methods.formState.errors.price}
            />
            <SInput
              inputName="image"
              placeholder="Enter product image URL"
              label="Image URL*"
              error={methods.formState.errors.image}
            />
            <SInput
              inputName="tag"
              placeholder="Enter product tag"
              label="Tag"
              error={methods.formState.errors.tag}
            />
            <SInput
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
            <SButtonSmall fullWidth={true}>Add Product</SButtonSmall>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProductForm;
