import { useGetUserInfoQuery } from "@/redux/api/userApi";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const { data, isLoading } = useGetUserInfoQuery(1);

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return <>{children}</>;
};

export default ProtectedRoute;
