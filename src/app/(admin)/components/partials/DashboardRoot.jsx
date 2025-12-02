import { Layout } from "antd";
import React from "react";
import Sidebar from "./Sidebar";
import DashboardMain from "./DashboardMain";
import AuthContextProvider from "@/contexts/AuthProviders";

const DashboardRoot = ({ children }) => {
  return (
    <AuthContextProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <DashboardMain>{children}</DashboardMain>
      </Layout>
    </AuthContextProvider>
  );
};

export default DashboardRoot;
