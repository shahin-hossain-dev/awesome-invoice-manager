import React, { useEffect } from "react";
import { notification } from "antd";

const Notification = ({ created }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.success({
      title: `Notification ${placement}`,
      description: "Created Successfully",
      placement,
    });
  };

  useEffect(() => {
    if (created) {
      openNotification();
    }
  }, [created]);

  return (
    <>
      {contextHolder}
      {/* 
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("bottomRight")}
          icon={<FaCheckCircle />}
        >
          bottomRight
        </Button>
      </Space> */}
    </>
  );
};
export default Notification;
