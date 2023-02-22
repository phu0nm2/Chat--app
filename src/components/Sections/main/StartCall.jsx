import React from "react";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";

import icons from "../../../assets/Images";
import { StyledInputBase } from "../../StylesMaterial/StyledInputBase";
import { Search, SearchIconWrapper } from "../../StylesMaterial/Search";
import { CallList } from "../../../data";
import CallElement from "../../CallElement";
import { XCircle } from "phosphor-react";

const StartCall = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(25,28,36,0.2)"
              : theme.palette.background.default,
        }}
        direction={"row"}
        justifyContent={"flex-end"}
        p={1}
      >
        <IconButton onClick={handleClose}>
          <XCircle />
        </IconButton>
      </Stack>
      <DialogTitle
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(25,28,36,0.2)"
              : theme.palette.background.default,
        }}
      >
        <Stack>
          <Stack mb={2}>
            <Search sx={{ width: "100%", borderRadius: "20px" }}>
              <SearchIconWrapper>
                <img
                  style={{ zIndex: "1" }}
                  src={icons.magnifyingGlass}
                  alt="magnifyingGlass"
                />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(25,28,36,0.2)"
              : theme.palette.background.default,
        }}
      >
        <Stack direction={"column"} spacing={1.5} p={1.5}>
          {CallList.map((item) => (
            <CallElement key={item.id} {...item} callVideo={true} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
