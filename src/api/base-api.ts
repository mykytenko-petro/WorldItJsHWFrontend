import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEVELOPMENT_API_URL } from "../config";
import type { Post } from "../types/post";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: DEVELOPMENT_API_URL}),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], void>({
            query: () => "/posts"
        })
    })
});

export const {
    useGetAllPostsQuery
} = baseApi;