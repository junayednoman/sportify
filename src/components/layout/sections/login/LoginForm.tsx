import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SButtonSmall from "@/components/ui/SButtonSmall";
import SInput from "@/components/ui/SInput";

import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface IFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <h4 className="md:text-[26px] font-semibold text-2xl">Login</h4>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
        >
          <SInput
            inputName="email"
            placeholder="Enter your email"
            label="Email*"
            error={methods.formState.errors.email}
          />
          <SInput
            inputName="password"
            type="password"
            placeholder="Enter your password"
            label="Password*"
            error={methods.formState.errors.password}
          />
          <SButtonSmall fullWidth={true}>Login</SButtonSmall>
        </form>
      </FormProvider>
      <p className="mt-4 text-[15px">
        Do not have an account?{" "}
        <Link to={"/sign-up"} className="font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
