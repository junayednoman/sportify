import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sportify-server-eight.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["product" , 'cart'],
  endpoints: () => ({}),
});
