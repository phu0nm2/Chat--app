import React from "react";

import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Phone } from "phosphor-react";

import {
  Search,
  SearchIconWrapper,
} from "../../components/StylesMaterial/Search";

import SideBar from "../../layouts/dashboard/SideBar";
import icons from "../../assets/Images";
import { StyledInputBase } from "../../components/StylesMaterial/StyledInputBase";
import { CallList } from "../../data";
import CallElement from "../../components/CallElement";
import StartCall from "../../components/Sections/main/StartCall";

const Call = () => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenCall = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Stack direction={"row"}>
      <Stack>
        <SideBar />
      </Stack>

      {/* left */}
      <Box
        bgcolor={"#F8FAFF"}
        sx={{
          position: "relative",
          width: 320,
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          p={2}
          sx={{ color: theme.palette.mode === "light" ? "#000000" : "#ffff" }}
          variant="h4"
        >
          Call Log
        </Typography>

        <Stack mt={3} mb={3}>
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

        <Stack
          mb={2}
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Typography
            p={2}
            sx={{
              color: theme.palette.mode === "light" ? "#709CE6" : "#ffff",
            }}
            variant="title"
          >
            Start new converstaion
          </Typography>
          <IconButton
            sx={{
              color: theme.palette.mode === "light" ? "#709CE6" : "#ffff",
            }}
            onClick={handleOpenCall}
          >
            <Phone />
          </IconButton>
        </Stack>

        <Divider />

        <Stack
          p={1.5}
          spacing={1.5}
          direction="column"
          sx={{ flexGrow: 1, overflowY: "scroll", height: "75%" }}
        >
          {/* render list caller */}
          {CallList.map((item) => (
            <CallElement key={item.id} {...item} />
          ))}
        </Stack>
      </Box>

      {isOpen && (
        <StartCall open={Boolean(handleOpenCall)} handleClose={handleClose} />
      )}
      {/* right */}
      {/* // Conversation */}
    </Stack>
  );
};

export default Call;
