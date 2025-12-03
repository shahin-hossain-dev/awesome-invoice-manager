const { baseApi } = require("./baseApi");

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanyList: builder.query({
      query: () => ({
        url: "/companies/list",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: "/companies/create",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useGetCompanyListQuery, useCreateCompanyMutation } = companyApi;
