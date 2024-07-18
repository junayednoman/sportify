import { Checkbox } from "@/components/ui/checkbox";
import SButtonSmall from "@/components/ui/SButtonSmall";
import SInput from "@/components/ui/SInput";
import { Textarea } from "@/components/ui/textarea";
import { usePlaceOrderMutation } from "@/redux/api/cart/cartApi";
import { getCurrentUser } from "@/redux/features/authSlice";
import { getCarts } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { TCartProduct } from "@/types";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "sonner";
import { useState } from "react";
import SBtnLoading from "@/components/ux/SBtnLoading";
import { Navigate, useNavigate } from "react-router-dom";

// Create Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  town: Yup.string().required("Town/City is required"),
  street_address: Yup.string().required("Street address is required"),
  postcode: Yup.string().required("Postcode/ZIP is required"),
});

const BillingInfoForm = () => {
  const user = useAppSelector(getCurrentUser);
  const cart = useAppSelector(getCarts);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Use the Yup resolver in useForm
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [placeOrder] = usePlaceOrderMutation();

  if (cart.products.length < 1) {
    return <Navigate to={"/products/all"} replace />;
  }


  // handle place order
  const handleCheckout = async (data: FieldValues) => {
    setLoading(true);
    const toastLoading = toast.loading("Processing...");
    const productIds = cart?.products?.map(
      (product: TCartProduct) => product.productId
    );

    // calculate price
    let totalPrice = 0;
    cart.products.forEach((product: TCartProduct) => {
      totalPrice += product.price;
    });

    const vatIncludedPrice = totalPrice * 0.15 + totalPrice;
    const shippingCost = 18;
    const finalPrice = vatIncludedPrice + shippingCost;
    const customer_address = `${data.town}, ${data.street_address}, ${data.postcode}`;

    const orderData = {
      orderId: "order-0001",
      userId: user!.id,
      products: productIds,
      total_amount: Number(finalPrice.toFixed(2)),
      payment_method: "cash on delivery",
      user_name: data.name,
      email: data.email,
      phone: data.phone,
      address: customer_address,
      order_note: data.note,
    };

    try {
      const res = await placeOrder(orderData).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastLoading });
        navigate("/order-success");
      }
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong!", {
        id: toastLoading,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="md:text-2xl font-semibold text-xl">Billing Details</h4>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleCheckout)} className="mt-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <SInput
              error={methods.formState.errors.name}
              inputName="name"
              placeholder="Enter your name"
              label="Name*"
            />
            <SInput
              error={methods.formState.errors.phone}
              inputName="phone"
              placeholder="Enter your phone number"
              label="Phone*"
            />
            <SInput
              error={methods.formState.errors.email}
              type="email"
              inputName="email"
              placeholder="Enter your email"
              label="Email*"
            />
            <SInput
              error={methods.formState.errors.town}
              inputName="town"
              placeholder="Enter your town / city"
              label="Town / City*"
            />
            <SInput
              error={methods.formState.errors.street_address}
              inputName="street_address"
              placeholder="Enter your Street address"
              label="Street address*"
            />
            <SInput
              error={methods.formState.errors.postcode}
              inputName="postcode"
              placeholder="Enter your Postcode / ZIP"
              label="Postcode / ZIP*"
            />
          </div>
          <div className="mt-4 space-y-1">
            <label htmlFor="note" className="text-sm font-semibold">
              Order Notes (optional)
            </label>
            <Textarea
              className="md:h-[180px] h-[120px]"
              id="note"
              {...methods.register("note")}
              placeholder="Write any order note"
            />
          </div>

          <div className="mt-5 bg-white rounded-md p-5">
            <p className="text-sm mb-4">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="#" className="font-semibold">
                privacy policy.
              </a>
            </p>
            <div className="flex items-center space-x-2 mb-3">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                I have read and agree to the website{" "}
                <a href="#" className="font-semibold">
                  terms and conditions *
                </a>
              </label>
            </div>
            <div>
              <SButtonSmall fullWidth={true}>
                {loading ? <SBtnLoading /> : "Place Order"}
              </SButtonSmall>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default BillingInfoForm;
