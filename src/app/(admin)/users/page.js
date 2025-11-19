"use client";

import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import Drawer from "../components/ui/Drawer";
import PageTopBar from "../components/partials/header/PageTopBar";

const UsersPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Create New User"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div>{/* <ProductForm /> */}</div>
      </Drawer>
      <PageTopBar buttonTitle={"Create User"} onClick={handleDrawerOpen} />
    </div>
  );
};

export default UsersPage;
