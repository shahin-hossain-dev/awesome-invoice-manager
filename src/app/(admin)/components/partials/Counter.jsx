import { Button, Input } from "antd";
import React from "react";

const Counter = () => {
  return (
    <div className="flex items-center">
      <Button type="primary" className="!rounded-r-none">
        -
      </Button>
      <Input className="!rounded-none !w-[50px]" />
      <Button type="primary" className="!rounded-l-none">
        +
      </Button>
    </div>
  );
};

export default Counter;
