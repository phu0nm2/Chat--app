import React from "react";

import {
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import { useDispatch } from "react-redux";

import { Users } from "phosphor-react";
import icons from "../../assets/Images";
import { ChatList } from "../../data";
import { socket } from "../../socket";
import { StyledInputBase } from "../../components/StylesMaterial/StyledInputBase";
import {
  Search,
  SearchIconWrapper,
} from "../../components/StylesMaterial/Search";
import AvatarElement from "../../components/AvatarElement";
import Friends from "../../components/Sections/mainDialog/Friends";

const Chats = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const user_id = localStorage.getItem("user_id");

  // const dispatch = useDispatch()

  React.useEffect(() => {
    socket?.emit("get_direct_conversation", { user_id }, (data) => {
      console.log("data", data);
    });
  }, [user_id]);

  const handleOpenFriends = () => {
    setIsOpen(true);
  };

  const handleCloseFriends = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography p={1} variant="h5">
              Chats
            </Typography>

            <Stack direction={"row"}>
              <IconButton onClick={handleOpenFriends}>
                <Users />
              </IconButton>
              <IconButton>
                <img src={icons.circleDashed} alt="circleDashed" />
              </IconButton>{" "}
            </Stack>
          </Stack>

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

          <Stack direction={"row"} p={2} spacing={1.5}>
            <IconButton>
              <img src={icons.ArchiveBox} alt="ArchiveBox" />
            </IconButton>
            <Button>Archived</Button>
          </Stack>

          <Divider />

          <Stack
            direction="column"
            sx={{
              flexGrow: 1,
              overflowY: "scroll",
              height: "100%",
            }}
          >
            {/* SimpleBarStyle is worked */}
            <SimpleBarReact style={{ maxHeight: "100%" }}>
              <Stack p={2} spacing={2}>
                <Stack p={1}>
                  <Typography variant="subtitle1" color={"#676667"}>
                    Pinned
                  </Typography>
                </Stack>

                {ChatList.filter((items) => items.pinned).map((item, index) => (
                  <AvatarElement key={index} {...item} />
                ))}
              </Stack>

              <Stack direction={"column"} p={2} spacing={2}>
                <Stack p={1}>
                  <Typography variant="subtitle1" color={"#676667"}>
                    All Chats
                  </Typography>
                </Stack>

                {ChatList.filter((items) => !items.pinned).map(
                  (item, index) => (
                    <AvatarElement key={index} {...item} />
                  ),
                )}
              </Stack>
            </SimpleBarReact>
          </Stack>
        </Stack>
      </Box>
      {isOpen && <Friends open={isOpen} handleClose={handleCloseFriends} />}
    </>
  );
};

export default Chats;
