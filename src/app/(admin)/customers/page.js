"use client";
import PageTopBar from "../components/partials/header/PageTopBar";
import Drawer from "../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import CustomerForm from "./_components/CustomerForm";
import CustomerList from "./_components/CustomerList";

const ProductPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Create Customer"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div className="">
          <CustomerForm />
        </div>
      </Drawer>
      <PageTopBar buttonTitle={"Create Customer"} onClick={handleDrawerOpen} />
      <CustomerList />
    </div>
  );
};

export default ProductPage;
