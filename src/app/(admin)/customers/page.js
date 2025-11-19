"use client";
import PageTopBar from "../components/partials/header/PageTopBar";
import Drawer from "../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";

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
        <div className=""></div>
      </Drawer>
      <PageTopBar buttonTitle={"Create Customer"} onClick={handleDrawerOpen} />
    </div>
  );
};

export default ProductPage;
