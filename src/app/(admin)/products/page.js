"use client";
import PageTopBar from "../components/partials/header/PageTopBar";
import Drawer from "../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import ProductForm from "./_components/ProductForm";

const ProductPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Add Product"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div className="">
          <ProductForm />
        </div>
      </Drawer>
      <PageTopBar buttonTitle={"Create Product"} onClick={handleDrawerOpen} />
    </div>
  );
};

export default ProductPage;
