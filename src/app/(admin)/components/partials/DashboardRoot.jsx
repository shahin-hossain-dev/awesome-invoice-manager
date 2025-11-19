import { Layout } from "antd";
import React from "react";
import Sidebar from "./Sidebar";
import DashboardMain from "./DashboardMain";

const DashboardRoot = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <DashboardMain>{children}</DashboardMain>
    </Layout>
  );
};

export default DashboardRoot;
