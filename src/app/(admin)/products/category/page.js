"use client";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import PageTopBar from "../../components/partials/header/PageTopBar";
import Drawer from "../../components/ui/Drawer";

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
        >
          Add Some Category
        </Drawer>
        <PageTopBar
          buttonTitle={"Add Category"}
          onChange={changeValue}
          onClick={handleDrawerOpen}
        />
      </div>
    </div>
  );
};

export default Category;
