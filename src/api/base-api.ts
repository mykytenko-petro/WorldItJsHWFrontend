import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEVELOPMENT_API_URL } from "../config";
import type { Post } from "../types/post";
import type { LoginInputs, RegistrationInputs, User } from "../types/user";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: DEVELOPMENT_API_URL,
        credentials: "include"
    }),
    tagTypes: ["User", "Post"],
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], void>({
            query: () => "/posts",
            providesTags: ["Post"]
        }),
        register: builder.mutation<User, RegistrationInputs>({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        login: builder.mutation<User, LoginInputs>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        getMe: builder.query<User, void>({
            query: () => "/me",
            providesTags: ["User"]
        }),
    })
});

export const {
    useGetAllPostsQuery,
    useGetMeQuery,
    useRegisterMutation,
    useLoginMutation
} = baseApi;
