/* eslint-disable @typescript-eslint/ban-types */
import { IFormInputs } from "@/components/layout/sections/manage products/AddProductForm";
import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData: IFormInputs) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (productData: IFormInputs) => ({
        url: `/products/${productData._id}`,
        method: "PUT",
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
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
