"use client";

import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import PageTopBar from "../components/partials/header/PageTopBar";
import CreateBlog from "./_components/CreateBlog";
import BlogList from "./_components/BlogList";

const BlogPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <PageTopBar buttonTitle={"Add Blog"} onClick={handleDrawerOpen} />

      <CreateBlog
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <BlogList />
    </div>
  );
};

export default BlogPage;
