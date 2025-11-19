import { Button } from "antd";
import React from "react";
import ChartByDate from "./ChartByDate";
import OrderBarChart from "./OrderBarChart";
import Card from "../../ui/Card";

const HomeGroupChart = () => {
  return (
    <section className="mt-4 md:mt-6 lg:mt-8">
      <div className="grid lg:grid-cols-8 gap-3">
        <div className="col-span-4">
          <Card
            title="Order By Date"
            extra={<span>Select</span>}
            className="!shadow"
          >
            <ChartByDate />
          </Card>
        </div>
        <div className="col-span-4">
          <Card
            title="Top Orders Product"
            extra={
              <div>
                <SortBy />
              </div>
            }
            className="!shadow"
          >
            <OrderBarChart />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeGroupChart;

const SortBy = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button type="primary">Day</Button>
      <Button type="primary">Week</Button>
      <Button type="primary">Month</Button>
      <Button type="primary">Year</Button>
    </div>
  );
};
