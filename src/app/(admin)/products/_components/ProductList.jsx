import React, { useState } from "react";
import Table from "../../components/ui/Table";
import { Space } from "antd";
import { FiEye } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { showConfirmAlert } from "@/utils/alert";

const ProductList = ({
  handleDrawerOpen,
  setIsEdit,
  setIsPreview,
  setIsCreate,
}) => {
  const [isRowsSelected, setIsRowsSelected] = useState(false);

  const dataSource = [
    {
      key: "1",
      date: "20-10-25",
      invoiceId: "INV12345",
      title: "This Is Blog 1",
      company: "Company 1",
      customer: "Customer",
      total: "Total",
      paid: "2000",
      status: "paid",
    },
    {
      key: "2",
      date: "20-10-25",
      invoiceId: "INV12346",
      title: "This Is Blog 2",
      company: "Company 2",
      customer: "Customer",
      total: "Total",
      paid: "2000",
      status: "paid",
    },
    {
      key: "3",
      date: "20-10-25",
      invoiceId: "INV12346",
      title: "This Is Blog 2",
      company: "Company 2",
      customer: "Customer",
      total: "Total",
      paid: "2000",
      status: "paid",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "1",
      sorter: (a, b) => Number(a.key) - Number(b.key),
    },
    {
      title: "Invoice Id",
      dataIndex: "invoiceId",
      key: "2",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "3",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "4",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "5",
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "6",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "7",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => handlePreview(record)}
            className="cursor-pointer !text-gray-500"
          >
            <FiEye className="text-lg" />
          </button>
          <button
            onClick={() => handleEdit(record)}
            className="cursor-pointer !text-sky-500"
          >
            <FaRegEdit className="text-lg" />
          </button>
          <button
            onClick={() => handleDelete(record)}
            className="cursor-pointer !text-red-500"
          >
            <FaRegTrashAlt className="text-lg" />
          </button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    handleDrawerOpen();
    setIsPreview(false);
    setIsCreate(false);
    setIsEdit(true);
  };

  const handleDelete = (record) => {
    showConfirmAlert({
      onConfirm: () => {
        return true;
      },
    });
  };

  const onRowClick = (record) => {
    // console.log(record);
  };

  const onSelectionChange = (records) => {
    if (records?.length > 0) {
      setIsRowsSelected(true);
    } else {
      setIsRowsSelected(false);
    }
  };

  const handleAllDelete = (data) => {
    showConfirmAlert({
      onConfirm: () => {
        return true;
      },
    });
  };

  const handlePreview = () => {
    handleDrawerOpen();
    setIsEdit(false);
    setIsCreate(false);
    setIsPreview(true);
  };

  return (
    <div className="overflow-x-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pageSize={10}
        activePagination={true}
        selectable={true}
        onRowClick={onRowClick}
        isSelected={isRowsSelected}
        onSelectionChange={onSelectionChange}
        handleAllDelete={handleAllDelete}
      />
    </div>
  );
};

export default ProductList;
