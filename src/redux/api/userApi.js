import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
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

export const { useGetUsersQuery } = userApi;
