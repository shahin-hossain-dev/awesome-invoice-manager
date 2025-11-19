"use client";
import Modal from "../components/ui/Modal";
import useModalOpen from "@/hooks/useModalOpen";
import Button from "../components/ui/Button";

const ReportPage = () => {
  const { isModalOpen, handleCancel, showModal } = useModalOpen();

  return (
    <div>
      <h2>Reports</h2>
      <Button onClick={showModal}>Modal Open</Button>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <h2>Some text Here</h2>
        <h3>Reuseable Modal</h3>
      </Modal>
    </div>
  );
};

export default ReportPage;
