import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserInfo: builder.query({
      query: (userId) => ({
        url: `/user-info?user_id=${userId}`,
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/create-user",
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserInfoQuery } = userApi;
