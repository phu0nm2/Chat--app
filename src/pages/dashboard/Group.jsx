import React from "react";

import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Plus } from "phosphor-react";

import {
  Search,
  SearchIconWrapper,
} from "../../components/StylesMaterial/Search";
import SideBar from "../../layouts/dashboard/SideBar";
import icons from "../../assets/Images";
import { StyledInputBase } from "../../components/StylesMaterial/StyledInputBase";
import { ChatList } from "../../data";
import AvatarElement from "../../components/AvatarElement";
import { SimpleBarStyle } from "../../components/Scrollbar";
import CreateGroup from "../../components/Sections/mainDialog/CreateGroup";

const Group = () => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleCreateNew = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Stack direction={"row"}>
      <SideBar sx={{ width: "120px" }} />

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
          Groups
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
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            p={2}
            sx={{
              color: theme.palette.mode === "light" ? "#709CE6" : "#ffff",
            }}
            variant="title"
          >
            Create New Group
          </Typography>
          <IconButton
            sx={{
              color: theme.palette.mode === "light" ? "#709CE6" : "#ffff",
            }}
            onClick={handleCreateNew}
          >
            <Plus />
          </IconButton>
        </Stack>

        <Divider />

        <Stack
          direction="column"
          sx={{ flexGrow: 1, overflowY: "scroll", height: "75%" }}
        >
          {/* SimpleBarStyle not working */}
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack p={2} spacing={1.5}>
              <Stack p={1}>
                <Typography variant="subtitle1" color={"#676667"}>
                  Pinned
                </Typography>
              </Stack>

              {ChatList.filter((items) => items.pinned).map((item, index) => (
                <AvatarElement key={index} {...item} />
              ))}
            </Stack>

            <Stack direction={"column"} p={2} spacing={1.5}>
              <Stack p={1}>
                <Typography variant="subtitle1" color={"#676667"}>
                  All Chats
                </Typography>
              </Stack>

              {ChatList.filter((items) => !items.pinned).map((item, index) => (
                <AvatarElement key={index} {...item} />
              ))}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Box>

      {isOpen && (
        <CreateGroup
          open={Boolean(handleCreateNew)}
          handleClose={handleClose}
        />
      )}
      {/* right */}
      {/* // Conversation */}
    </Stack>
  );
};

export default Group;
