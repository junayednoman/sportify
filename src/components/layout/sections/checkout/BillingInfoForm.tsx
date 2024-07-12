import SInput from "@/components/ui/SInput";
import { Textarea } from "@/components/ui/textarea";
import { FormProvider, useForm } from "react-hook-form";

const BillingInfoForm = () => {
  const methods = useForm();
  return (
    <div>
      <h4 className="md:text-2xl font-semibold text-xl">Billing Details</h4>
      <FormProvider {...methods}>
        <form className="mt-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <SInput
              inputName="name"
              placeholder="Enter your name"
              label="Name*"
            />
            <SInput
              inputName="phone"
              placeholder="Enter your phone number"
              label="Phone*"
            />
            <SInput
              type="email"
              inputName="email"
              placeholder="Enter your email"
              label="email*"
            />
            <SInput
              type="town / city"
              inputName="town / city"
              placeholder="Enter your town / city"
              label="town / city*"
            />
            <SInput
              type="Street address"
              inputName="Street address"
              placeholder="Enter your Street address"
              label="Street address*"
            />
            <SInput
              type="Postcode / ZIP"
              inputName="Postcode / ZIP"
              placeholder="Enter your Postcode / ZIP"
              label="Postcode / ZIP*"
            />
          </div>
          <div className="mt-4 space-y-1">
            <label htmlFor="note" className="text-sm font-semibold">
              Order Notes(optional)
            </label>
            <Textarea
            className="md:h-[180px] h-[120px]"
              id="note"
              {...methods.register("note")}
              placeholder="Write any order note"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default BillingInfoForm;
