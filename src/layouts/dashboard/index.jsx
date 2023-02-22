import React from "react";

import { Stack } from "@mui/material";

import GeneralApp from "../../pages/dashboard/GeneralApp";
import SideBar from "./SideBar";
// import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
