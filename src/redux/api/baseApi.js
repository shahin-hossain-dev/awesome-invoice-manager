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
  // ...args = { url, method, data, params, headers }
  baseQuery: async ({ ...args }, api) => {
    try {
      // get token from redux authSlice state
      const token = api.getState()?.authReducer?.token;

      const headers = {
        ...(args.headers || {}),
        Authorization: `bearer ${token}`,
      };

      const result = await axiosSecure({ ...args, headers });
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
