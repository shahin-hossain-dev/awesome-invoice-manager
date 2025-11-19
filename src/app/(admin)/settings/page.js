"use client";
import React from "react";

import Modal from "../components/ui/Modal";
import useModalOpen from "@/hooks/useModalOpen";
import Button from "../components/ui/Button";

const AccountSetting = () => {
  const { isModalOpen, handleCancel, showModal } = useModalOpen();

  return (
    <div>
      <h2>Reports</h2>
      <Button onClick={showModal}>Modal Open</Button>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <h2>Some text Here</h2>
        <h3>Reuseable Modal</h3>
      </Modal>
      <AccountOption />
    </div>
  );
};

export default AccountSetting;

const AccountOption = () => {
  const { isModalOpen, handleCancel, showModal } = useModalOpen();

  return (
    <div>
      <h2>Account Options</h2>

      <Button onClick={showModal}>Modal Open</Button>
      <Modal
        title={"Update Profile"}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <h2>Some text Here Two</h2>
        <h3>Reuseable Modal Two</h3>
      </Modal>
    </div>
  );
};
