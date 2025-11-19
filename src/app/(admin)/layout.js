"use client";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const DashboardRoot = dynamic(
  () => import("./components/partials/DashboardRoot"),
  { ssr: false }
);

const DashboardLayout = ({ children }) => {
  return <DashboardRoot>{children}</DashboardRoot>;
};
export default DashboardLayout;
