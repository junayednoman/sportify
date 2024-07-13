/* eslint-disable @typescript-eslint/ban-types */
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { baseApi } from "../baseApi";
import { TLogin, TUser } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      "product",
      "api"
    >
  ) => ({
    login: builder.mutation({
      query: (userInfo: TLogin) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo: TUser) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
