"use client";
import React from "react";
import Section from "../components/ui/Section";
import ProfileBanner from "./_components/ProfileBanner";
import Drawer from "../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import ProfileSetting from "./_profileSetting/ProfileSetting";
import ProfileBody from "./_components/ProfileBody";

const MyProfilePage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();
  return (
    <Section>
      <ProfileBanner handleDrawerOpen={handleDrawerOpen} />
      <ProfileBody />

      <Drawer
        title={"Edit Profile"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <ProfileSetting />
      </Drawer>
    </Section>
  );
};

export default MyProfilePage;
