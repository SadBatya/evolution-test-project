import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IDocument {
  id: number;
  title: string;
  type: number;
  description: string;
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lxnzosljibjdpmfibymw.supabase.co/rest/v1",
    prepareHeaders: (headers) => {
      headers.set("apikey", API_KEY);
      headers.set("Authorization", `Bearer ${API_KEY}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getItems: builder.query<IDocument[], void>({
      query: () => "documents",
    }),
    createItem: builder.mutation<
      IDocument,
      { title: string; description: string; type: number; id: number }
    >({
      query: (body) => ({
        url: "documents",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = apiSlice;
