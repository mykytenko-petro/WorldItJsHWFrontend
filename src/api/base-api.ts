import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEVELOPMENT_API_URL } from "../config";
import type { Post } from "../types/post";
import type { LoginInputs, RegistrationInputs, User } from "../types/user";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: DEVELOPMENT_API_URL}),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], void>({
            query: () => "/posts"
        }),
        register: builder.mutation<User, RegistrationInputs>({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation<User, LoginInputs>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            })
        }),
    })
});

export const {
    useGetAllPostsQuery,
    useRegisterMutation,
    useLoginMutation
} = baseApi;