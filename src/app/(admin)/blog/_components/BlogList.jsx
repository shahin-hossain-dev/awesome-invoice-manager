"use client";
import React, { useState } from "react";
import Table from "../../components/ui/Table";
import { Space } from "antd";
import Swal from "sweetalert2";
// import EditBlog from "./EditBlog";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";

const BlogList = () => {
  // const { data, refetch } = useGetAllBlogsQuery();
  const [editBlog, setEditBlog] = useState(null);
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  const handleDelete = async (blog) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    // .then(async (res) => {
    //   const result = await deleteBlog(blog?.key);

    //   if (result?.data?.success) {
    //     refetch();
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success",
    //     });
    //     handleDrawerClose();
    //   }
    // });
  };

  const handleEdit = (blog) => {
    //   const updateBlog = blogs?.find((item) => item._id === blog?.key);
    //   setEditBlog(updateBlog);
    //   handleDrawerOpen();
  };

  //   const datasource = blogs?.map((blog) => {
  //     const data = {
  //       key: blog._id,
  //       title: blog.title,
  //       // content: blog.content,
  //     };
  //     return data;
  //   });

  const dataSource = [
    {
      key: "1",
      title: "This Is Blog 1",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      title: "This Is Blog 2",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "id",
      sorter: (a, b) => Number(a.key) - Number(b.key),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    // {
    //   title: "Blog",
    //   dataIndex: "content",
    //   key: "blog",
    // },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => handleEdit(record)}
            className="cursor-pointer !text-sky-500"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(record)}
            className="cursor-pointer !text-red-500"
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const onRowClick = (record) => {
    console.log(record);
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pageSize={10}
        activePagination={true}
        selectable={true}
        onRowClick={onRowClick}
      />
      {/* <EditBlog
        refetch={refetch}
        blog={editBlog}
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      /> */}
    </div>
  );
};

export default BlogList;
