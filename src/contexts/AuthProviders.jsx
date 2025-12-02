"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImSpinner } from "react-icons/im";
import { useGetUserInfoQuery } from "@/redux/api/userApi";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const loginInfo = useSelector((state) => state.authReducer);

  const token = loginInfo?.token;
  const user = loginInfo?.user;
  console.log(user);
  const { data, isLoading } = useGetUserInfoQuery(user?.userId);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="flex items-center flex-col">
          <ImSpinner className="text-neutral-800 text-2xl animate-spin" />
          <h2>Loading...</h2>
        </div>
      </div>
    );
  } else if (!data) {
    router.push("/login");
  }

  //   useEffect(() => {
  //     if (data) {
  //       router.push("/login");

  //       return;
  //     }
  //   }, []);

  if (!data)
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="flex items-center flex-col">
          <ImSpinner className="text-neutral-800 text-2xl animate-spin" />
          <h2>Loading...</h2>
        </div>
      </div>
    );

  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
