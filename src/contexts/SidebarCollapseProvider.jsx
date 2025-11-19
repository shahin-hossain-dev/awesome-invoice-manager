import React, { createContext, useState } from "react";

const CollapseContext = createContext(null);

const SidebarCollapseProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const items = {
    isCollapsed,
    setIsCollapsed,
  };

  return <CollapseContext value={items}>{children}</CollapseContext>;
};

export default SidebarCollapseProvider;
