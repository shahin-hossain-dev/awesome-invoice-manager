import axios from "axios";
import config from "@/configs/config";
import { Router } from "next/router";

// import { store } from "@/redux/store";
// import { selectAuthToken } from "@/redux/selectors";

const axiosSecure = axios.create({
  baseURL: `${config.apiBaseUrl}/api/v1`,
  // withCredentials: true, //send token automatically
});

// axiosSecure.interceptors.request.use(
//   (request) => {
//     // const token = selectAuthToken(store?.getState()?.authReducer);

//     // if (token) {
//     request.headers.Authorization = `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FpbS5yaXQtZ2xvYmFsLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE3NjQ2NTU2ODAsImV4cCI6MTc2NDc0MjA4MCwibmJmIjoxNzY0NjU1NjgwLCJqdGkiOiI1aEZEbTVWM3BjZTBIcWxJIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.E9j5XINhI_w-5Fcp0scMh73Hr7oCDlbJzT8SZKDq6s4"}`;
//     // }

//     return request;
//   },
//   (error) => Promise.reject(error)
// );

axiosSecure.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      console.log("Unauthorized Users");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } else if (status === 403) {
      alert("Forbidden Access");
    } else if (!error?.response) {
      console.log("Network Error");
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;

export const axiosPublic = axios.create({
  baseURL: `${config.apiBaseUrl}/api/v1`,
});
