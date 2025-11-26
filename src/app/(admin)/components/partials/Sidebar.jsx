"use client";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { MdEditAttributes } from "react-icons/md";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { MdAddShoppingCart } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { FaCartPlus, FaRegCircle } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";
import { FaRegHeart, FaGift, FaBlogger, FaUserCog } from "react-icons/fa";
import { MdPhotoLibrary, MdRateReview } from "react-icons/md";
import { BiSlideshow } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setIsCollapsed } from "@/redux/features/collapseSlice";

const Sidebar = () => {
  const router = useRouter();
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const { isCollapsed } = useSelector((state) => state.collapseSlice);
  const dispatch = useDispatch();

  const handleNavigateRoutes = (e) => {
    const ROUTES = {
      dashboard: "/",
      invoice: "/invoice",
      products: "/products",
      category: "/category",
      customers: "/customers",
      users: "/users",
      reports: "/reports",
      setting: "/settings",
      tax: "/settings/tax",
      globalSetting: "/global-setting",
      company: "/company",
    };

    const routes = {
      1: ROUTES.dashboard,
      2: ROUTES.invoice,
      3: ROUTES.products,
      4: ROUTES.customers,
      5: ROUTES.users,
      6: ROUTES.reports,
      7: ROUTES.setting,
      8: ROUTES.category,
      9: ROUTES.tax,
      10: ROUTES.company,
    };

    router.push(routes[e.key] || "/");
  };

  const items = [
    {
      key: "1",
      label: "Dashboard",
      icon: <RiDashboardHorizontalFill className="text-icon" />,
    },
    {
      key: "2",
      label: "Invoice",
      icon: <IoDocumentTextOutline className="text-icon" />,
      // children: [
      //   {
      //     key: "19",
      //     label: "List",
      //     icon: <FaRegCircle />,
      //   },
      //   {
      //     key: "20",
      //     label: "Add",
      //     icon: <FaRegCircle />,
      //   },
      // ],
    },
    {
      key: "3",
      label: "Products",
      icon: <AiFillProduct className="text-icon" />,

      // children: [
      //   {
      //     key: "2",
      //     label: "Product",
      //     icon: <MdAddShoppingCart className="text-icon" />,
      //   },
      //   {
      //     key: "5",
      //     label: "Category",
      //     icon: <MdOutlineCategory className="text-icon" />,
      //   },
      //   {
      //     key: "4",
      //     label: "Attribute",
      //     icon: <MdEditAttributes className="text-icon" />,
      //   },
      //   {
      //     key: "3",
      //     label: "Attribute Option",
      //     icon: <LuDot className="-ml-4 text-icon" />,
      //   },
      // ],
    },
    {
      key: "8",
      label: "Category",
      icon: <AiFillProduct className="text-icon" />,
    },

    {
      key: "4",
      label: "Customers",
      icon: <CgUserList className="text-icon" />,
    },
    {
      key: "10",
      label: "Company",
      icon: <CgUserList className="text-icon" />,
    },
    { key: "5", label: "Users", icon: <CgUserList className="text-icon" /> },
    { key: "6", label: "Reports", icon: <CgUserList className="text-icon" /> },
    {
      key: "sub1",
      label: "Settings",
      icon: <FiSettings className="text-icon" />,
      children: [
        {
          key: "7",
          label: "App Setting",
          icon: <MdAddShoppingCart className="text-icon" />,
        },
        {
          key: "9",
          label: "Tax",
          icon: <MdAddShoppingCart className="text-icon" />,
        },
      ],
    },
  ];

  return (
    <div
      className="sidebar fixed lg:sticky top-0 z-50"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Sider
        breakpoint="lg"
        width={250}
        className="!fixed min-h-screen !top-0 !left-0 !h-full  lg:!sticky !z-50 overflow-y-scroll overflow-x-hidden "
        theme="dark"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          if (!broken) {
            dispatch(setIsCollapsed(false));
          }
        }}
        collapsed={isCollapsed}
        onCollapse={(collapsed, type) => {
          if (collapsed) {
            dispatch(setIsCollapsed(true));
          }
        }}
      >
        <div className="flex justify-between items-center px-2 py-2">
          <h2 className="demo-logo-vertical text-white  font-bold text-lg md:text-xl lg:text-2xl  text-center">
            Dash Logo
          </h2>
          <button
            className="lg:hidden"
            onClick={() => dispatch(setIsCollapsed(!isCollapsed))}
          >
            <TbLayoutSidebarLeftCollapse className="text-white text-2xl" />
          </button>
        </div>

        <Menu
          onClick={handleNavigateRoutes}
          theme="dark"
          style={{ backgroundColor: "#2F3349" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          className="!text-[1rem]"
        />
      </Sider>
    </div>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default Sidebar;
