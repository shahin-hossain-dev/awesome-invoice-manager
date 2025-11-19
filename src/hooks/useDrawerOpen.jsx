import { useState } from "react";

const useDrawerOpenClose = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return {
    isDrawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  };
};

export default useDrawerOpenClose;
