import React from "react";

import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import icons from "../../assets/Images";

const MainLayout = () => {
  return (
    <Container maxWidth="sm">
      <Stack p={3} sx={{ width: "100%" }} alignItems={"center"}>
        <img style={{ width: 150, height: 150 }} src={icons.Logo} alt="logo" />
      </Stack>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
