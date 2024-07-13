import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SButtonSmall from "@/components/ui/SButtonSmall";
import SInput from "@/components/ui/SInput";
import { jwtDecode } from "jwt-decode";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";

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
    defaultValues: { email: "noman@gmail.com", password: "password123" },
  });
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IFormInputs) => {
    const loadingToast = toast.loading("Signing in...", {
      position: "top-center",
    });
    try {
      const res = await login(data).unwrap();
      console.log(res);
      if (res.success) {
        const token = res.accessToken;
        const user = jwtDecode(token);
        toast.success(res.message, {
          id: loadingToast,
        });
        dispatch(setUser({ user, token }));
        navigate(`/`);
      }
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong!", {
        id: loadingToast,
      });
    }
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
