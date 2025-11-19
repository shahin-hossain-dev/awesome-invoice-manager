import { Footer } from "antd/es/layout/layout";

const DashboardFooter = () => {
  console.log(process.env.NEXT_PUBLIC_NODE_ENV);
  return (
    <Footer style={{ textAlign: "center" }}>
      Next Dashboard ©{new Date().getFullYear()} Created by Artificial Soft
    </Footer>
  );
};

export default DashboardFooter;
