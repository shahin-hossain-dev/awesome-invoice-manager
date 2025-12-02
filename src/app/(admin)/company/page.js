"use client";
import PageTopBar from "../components/partials/header/PageTopBar";
import Drawer from "../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";

import CompanyForm from "./_components/CompanyForm";
import CompanyList from "./_components/CompanyList";

const CompanyPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Create Company"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div className="">
          <CompanyForm />
        </div>
      </Drawer>
      <PageTopBar buttonTitle={"Create Company"} onClick={handleDrawerOpen} />
      <CompanyList />
    </div>
  );
};

export default CompanyPage;
