import axios from "axios";
import config from "@/configs/config";
import { Router } from "next/router";

const axiosSecure = axios.create({
  baseURL: `${config.apiBaseUrl}/api/v1`,
  withCredentials: true, //send token automatically
});

axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Router.push("/login");
      console.log("Unauthorized Users");
    } else if (error.response?.status === 403) {
      Router.push("/login");
      console.log("Forbidden Access");
    } else if (!error?.response) {
      console.log("Network Error");
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
