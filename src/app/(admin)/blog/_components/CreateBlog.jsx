"use client";
// import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { joditConfig } from "@/configs/joditConfigs";
import Drawer from "../../components/ui/Drawer";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const CreateBlog = ({ isDrawerOpen, handleDrawerClose }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleCreateBlog = async () => {
    const newPost = {
      title,
      content,
    };

    // if (newPost.title && newPost.content) {
    //   const result = await createPost(newPost);

    //   if (result?.data?.success) {
    //     setContent("");
    //     setTitle("");
    //     Swal.fire({
    //       title: "Blog Created!",
    //       icon: "success",
    //       draggable: true,
    //     });
    //   }
    // } else {
    //   alert("Input Not Valid");
    // }
  };

  return (
    <div>
      <Drawer
        title={"Add New Blog"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 z-50 w-full">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label={"Blog Title"}
              placeholder={"Write  Blog Title"}
            />

            <div className="mb-2.5">
              <label className=" font-semibold mb-2 ">Blog Content</label>
            </div>
            <JoditEditor
              key={isDrawerOpen}
              ref={editor}
              value={content}
              config={joditConfig}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
            />
            <div className="py-4">
              <Button onClick={handleCreateBlog}>Create</Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CreateBlog;
