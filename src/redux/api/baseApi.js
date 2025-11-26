// import config from "@/configs/config";
import axiosSecure from "@/libs/axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: `${config.apiBaseUrl}/api/v1`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }),
  baseQuery: async ({ url, method, data }) => {
    try {
      const result = await axiosSecure({ url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  },

  endpoints: () => ({}),
});
