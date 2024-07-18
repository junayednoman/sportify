/* eslint-disable @typescript-eslint/ban-types */
import { ISignUpFormInputs } from "@/components/layout/sections/sign up/SignUpForm";
import { baseApi } from "../baseApi";
import { TLogin } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (
    builder
  ) => ({
    login: builder.mutation({
      query: (userInfo: TLogin) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo: ISignUpFormInputs) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
