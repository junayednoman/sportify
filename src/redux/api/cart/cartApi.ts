import { TCart } from "@/types";
import { baseApi } from "../baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (data: TCart) => ({
        url: "/carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product", "cart"],
    }),
    getCart: builder.query({
      query: (userEmail) => ({
        url: `/carts/${userEmail}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    updateCartProductQuantity: builder.mutation({
      query: (updatedData) => ({
        url: `/carts/${updatedData.userId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["product", "cart"],
    }),
    deleteCartProductItem: builder.mutation({
      query: (updatedData) => ({
        url: `/carts/${updatedData.userId}`,
        method: "DELETE",
        body: {
          productIds: [updatedData.productId],
          quantity: updatedData.quantity,
        },
      }),
      invalidatesTags: ["product", "cart"],
    }),
    placeOrder: builder.mutation({
      query: (updatedData) => ({
        url: `/orders`,
        method: "POST",
        body: updatedData,
      }),
      invalidatesTags: ["product", "cart"],
    }),
  }),
});

export const {
  useAddCartMutation,
  useGetCartQuery,
  useUpdateCartProductQuantityMutation,
  useDeleteCartProductItemMutation,
  usePlaceOrderMutation
} = cartApi;
