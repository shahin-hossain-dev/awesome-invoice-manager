"use client";
import { Breadcrumb, Layout } from "antd";
import DashboardFooter from "./Footer";
import Header from "./Header";

const { Content } = Layout;

const DashboardMain = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ margin: "0 16px" }}>
        {/* <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "User" }, { title: "Bill" }]}
        /> */}
        <div>{children}</div>
      </Content>
      <DashboardFooter />
    </Layout>
  );
};

export default DashboardMain;
