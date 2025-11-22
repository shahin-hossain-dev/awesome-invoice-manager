import React, { useState } from "react";
import Table from "@/app/(admin)/components/ui/Table";
import { Space } from "antd";
import { FiEye } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { showConfirmAlert } from "@/utils/alert";

const TaxList = ({
  handleDrawerOpen,
  setIsEdit,
  setIsPreview,
  setIsCreate,
}) => {
  const [isRowsSelected, setIsRowsSelected] = useState(false);

  const dataSource = [
    {
      key: "1",
      category_name: "Category 1",
      category_details: "Details 1",
    },
    {
      key: "2",
      category_name: "Category 1",
      category_details: "Details 1",
    },
  ];

  const columns = [
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "1",
      sorter: (a, b) => Number(a.key) - Number(b.key),
    },
    {
      title: "Details",
      dataIndex: "category_details",
      key: "2",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <button
            onClick={() => handlePreview(record)}
            className="cursor-pointer !text-gray-500"
          >
            <FiEye className="text-lg" />
          </button> */}
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

export default TaxList;
