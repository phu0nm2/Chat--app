import React from "react";

import { Stack } from "@mui/material";

import GeneralApp from "../../pages/dashboard/GeneralApp";
import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <>
      <Stack direction={"row"}>
        {/* SideBar */}
        <SideBar />

        {/* <Outlet /> */}
        <GeneralApp />
      </Stack>
    </>
  );
};

export default DashboardLayout;
