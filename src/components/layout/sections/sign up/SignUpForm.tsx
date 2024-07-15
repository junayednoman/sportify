import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SButtonSmall from "@/components/ui/SButtonSmall";
import SInput from "@/components/ui/SInput";

import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import { toast } from "sonner";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  image: yup.string().required("Image URL is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface IFormInputs {
  name: string;
  email: string;
  image: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    const toastLoading = toast.loading("Signing up...");
    try {
      const res = await signUp(data).unwrap();
      if (res.success) {
        toast.success(res.message, {
          id: toastLoading,
        });
        navigate(`/login`);
      }
    } catch (err: any) {
      toast.error(err.data.message || "Something went wrong!", {
        id: toastLoading,
      });
    }
  };

  return (
    <div>
      <h4 className="md:text-[26px] font-semibold text-2xl">Sign Up</h4>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
        >
          <SInput
            inputName="name"
            placeholder="Enter your name"
            label="Name*"
            error={methods.formState.errors.name}
          />
          <SInput
            inputName="email"
            placeholder="Enter your email"
            label="Email*"
            error={methods.formState.errors.email}
          />
          <SInput
            inputName="image"
            placeholder="Enter your image URL"
            label="Image URL*"
            error={methods.formState.errors.image}
          />
          <SInput
            inputName="password"
            type="password"
            placeholder="Enter your password"
            label="Password*"
            error={methods.formState.errors.password}
          />
          <SButtonSmall fullWidth={true}>Sign Up</SButtonSmall>
        </form>
      </FormProvider>
      <p className="mt-4 text-[15px]">
        Already have an account?{" "}
        <Link to={"/login"} className="font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
