"use client";

import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import Drawer from "../components/ui/Drawer";
import PageTopBar from "../components/partials/header/PageTopBar";
import UserList from "./_components/UserList";
import UserForm from "./_components/UserForm";

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
        <div>
          <UserForm />
        </div>
      </Drawer>
      <PageTopBar buttonTitle={"Create User"} onClick={handleDrawerOpen} />
      <UserList />
    </div>
  );
};

export default UsersPage;
