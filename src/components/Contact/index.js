import React from "react";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";

import {
  Bell,
  CaretRight,
  FlagBanner,
  Phone,
  Star,
  Trash,
  VideoCamera,
} from "phosphor-react";
import { useDispatch } from "react-redux";

import {
  toggleSidebarAction,
  updateSidebarTypeAction,
} from "../../redux/slices/app";
import icons from "../../assets/Images";
import AntSwitch from "../StylesMaterial/AntSwitch";

const BlockDialog = ({ open, handleClose, handleOk }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      onClick={handleOk}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Do you wanna block this user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const DeleteDialog = ({ open, handleClose, handleOk }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      onClick={handleOk}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Do you wanna delete this user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseDelete = () => {
    setOpenBlock(false);
  };
  const handleOpenDelete = () => {
    setOpenBlock(true);
  };

  const handleCloseContact = () => {
    dispatch(toggleSidebarAction());
  };

  const handleOpenShared = () => {
    dispatch(updateSidebarTypeAction("SHARED"));
  };

  const handleOpenStarted = () => {
    dispatch(updateSidebarTypeAction("STARTED"));
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        width: "380px",
        overflow: "scroll",
      }}
    >
      {/* contact head */}
      <Stack>
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            height: "88px",
            paddingTop: "31px",
          }}
        >
          <IconButton
            onClick={handleCloseContact}
            sx={{
              padding: 0,
              marginLeft: "29px",
              background: theme.palette.mode === "light" ? "#dfd9d9" : "#fff",
              ":hover": {
                background: theme.palette.mode === "light" ? "#fff" : "#b1a4a4",
              },
            }}
          >
            <img src={icons.close} alt="close icon" />
            {/* <X /> */}
          </IconButton>

          <Typography
            variant="title"
            sx={{
              paddingLeft: "18px",
              color: theme.palette.mode === "light" ? "black" : "#fff",
            }}
          >
            Contact info
          </Typography>
        </Box>
      </Stack>

      {/* contact content */}
      <Stack>
        <Stack p={3}>
          <Stack direction={"row"} alignItems={"center"} spacing={4} p={2}>
            <Box>
              <IconButton sx={{ padding: 0 }}>
                <Avatar
                  sx={{ width: 55, height: 55 }}
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </IconButton>
            </Box>

            <Stack spacing={0.25} p={1}>
              <Typography variant="body2">{faker.name.fullName()}</Typography>
              <Typography variant="body2">+91 6265 081 928</Typography>
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Stack direction={"column"} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="caption">Audio</Typography>
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="caption">Voice</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />

        <Stack p={2}>
          <Stack spacing={2}>
            <Typography variant="subtitle2">About</Typography>
            <Typography variant="subtitle2">Hi there, I am using</Typography>
          </Stack>
        </Stack>
        <Divider />

        <Stack p={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="body1">Media, links and docs</Typography>
            <Stack
              width="50px"
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Typography variant="body1">201</Typography>
              <IconButton onClick={handleOpenShared}>
                <CaretRight width={20} height={20} />
              </IconButton>
            </Stack>
          </Stack>
          {/* render imgs */}
          <Stack
            p={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {[1, 2, 3].map((item, i) => (
              <Box key={i} sx={{ width: 100, height: 100 }}>
                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Divider />

        <Stack
          p={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack>
            <Button startIcon={<Star />}>Started Messages</Button>
          </Stack>
          <IconButton onClick={handleOpenStarted}>
            <CaretRight width={20} height={20} />
          </IconButton>
        </Stack>
        <Divider />

        <Stack
          p={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack>
            <Button startIcon={<Bell />}>Mute Notification</Button>
          </Stack>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
        </Stack>
        <Divider />

        <Stack p={2}>
          <Stack direction={"column"}>
            <Typography variant="caption"> 1 group in common</Typography>
            <Stack p={1} direction={"row"} alignItems={"center"}>
              <Box>
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </Box>
              <Stack direction={"column"} p={2}>
                <Typography variant="subtitle2">Camel's Gang</Typography>
                <Typography variant="caption">
                  owl, Parrot, Rabbit, You
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Button
              onClick={handleOpenBlock}
              variant="outlined"
              size="large"
              startIcon={<FlagBanner />}
            >
              Block
            </Button>
            {openBlock && (
              <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
            )}

            <Button
              onClick={handleOpenDelete}
              variant="outlined"
              size="large"
              startIcon={<Trash />}
            >
              Delete
            </Button>
            {openDelete && (
              <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
