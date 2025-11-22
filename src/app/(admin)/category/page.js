"use client";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import PageTopBar from "../components/partials/header/PageTopBar";
import Drawer from "../components/ui/Drawer";
import CategoryForm from "./_components/CategoryForm";
import CategoryList from "./_components/CategoryList";

const Category = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  const handleGet = () => {
    console.log("hello");
  };
  const changeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>
        <Drawer
          title={"Add Category"}
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          className={"!bg-main-background"}
        >
          <CategoryForm />
        </Drawer>
        <PageTopBar
          buttonTitle={"Add Category"}
          onChange={changeValue}
          onClick={handleDrawerOpen}
        />
        <CategoryList />
      </div>
    </div>
  );
};

export default Category;
