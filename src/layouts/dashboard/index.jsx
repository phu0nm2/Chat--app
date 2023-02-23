import React from "react";

import { Stack } from "@mui/material";

import GeneralApp from "../../pages/dashboard/GeneralApp";
import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
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
