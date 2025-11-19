import React from "react";
import TopGroupStats from "./components/partials/stats/TopGroupStats";
import MonthlyGroupStats from "./components/partials/stats/MonthlyGroupStats";
import HomeGroupChart from "./components/partials/charts/HomeGroupChart";
import RecentOrderTable from "./components/partials/tables/RecentOrderTable";

const DashboardHome = () => {
  return (
    <div>
      <TopGroupStats />
      <MonthlyGroupStats />
      <HomeGroupChart />
      <RecentOrderTable />
    </div>
  );
};

export default DashboardHome;
