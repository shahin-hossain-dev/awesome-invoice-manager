"use client";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import PageTopBar from "../../components/partials/header/PageTopBar";
import Drawer from "../../components/ui/Drawer";
import TaxList from "./_components/TaxList";
import TaxForm from "./_components/TaxForm";

const TaxPage = () => {
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
          title={"Add Tax Rate"}
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          className={"!bg-main-background"}
        >
          <TaxForm />
        </Drawer>
        <PageTopBar
          buttonTitle={"Add Tax Rate"}
          onChange={changeValue}
          onClick={handleDrawerOpen}
        />
        <TaxList />
      </div>
    </div>
  );
};

export default TaxPage;
