/* eslint-disable @typescript-eslint/ban-types */
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { baseApi } from "../baseApi";
import { TProduct } from "@/types";

const productApi = baseApi.injectEndpoints({
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
    addProduct: builder.mutation({
      query: (productData: TProduct) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["product"],
    }),
    getProducts: builder.query({
      query: (query) => ({
        url: `/products`,
        method: "GET",
        params: { ...query },
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = productApi;
