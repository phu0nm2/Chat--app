import React from "react";
import {
  Box,
  IconButton,
  Stack,
  useTheme,
  Divider,
  Avatar,
  Typography,
  Button,
  Link,
} from "@mui/material";
import {
  Article,
  BellRinging,
  CaretLeft,
  ClipboardText,
  Image,
  Key,
  Lock,
  PencilCircle,
  WarningCircle,
} from "phosphor-react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import icons from "../../../assets/Images";

import ShortcutDialog from "../../../components/Sections/settings/ShortcutDialog";
import SideBar from "../../../layouts/dashboard/SideBar";

const Settings = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [isOpenKeyboardShortcuts, setIsOpenKeyboardShortcuts] =
    React.useState(false);

  const handleOpenKeyboardShortCut = () => {
    setIsOpenKeyboardShortcuts(true);
  };
  const handleCloseKeyboardShortCut = () => {
    setIsOpenKeyboardShortcuts(false);
  };

  const handleBack = () => {
    navigate("/app");
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          height: "100%",
        }}
      >
        <Stack>
          <SideBar />
        </Stack>
        <Stack p={2} sx={{ width: "400px" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton onClick={handleBack}>
              <CaretLeft size={35} />
            </IconButton>
            <Typography variant="h3">Settings</Typography>
          </Stack>

          <Stack p={2}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Box>
                <IconButton sx={{ padding: 0 }}>
                  <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={faker.image.avatar()}
                    alt={faker.name.fullName()}
                  />
                </IconButton>
              </Box>

              <Stack spacing={0.25}>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">{faker.random.words()}</Typography>
              </Stack>
            </Stack>

            {/* options */}
            <Stack display={"block"} spacing={2} pt={2}>
              <Button startIcon={<BellRinging />}>
                <Typography variant="subtitle">Notifications</Typography>
              </Button>
              <Divider />
              <Button startIcon={<Lock />}>
                <Typography variant="subtitle">Privacy</Typography>
              </Button>
              <Divider />
              <Button startIcon={<Key />}>
                <Typography variant="subtitle">Security</Typography>
              </Button>
              <Divider />
              <Button startIcon={<PencilCircle />}>
                <Typography variant="subtitle">Theme</Typography>
              </Button>
              <Divider />
              <Button startIcon={<Image />}>
                <Typography variant="subtitle">Chat Wallpaper</Typography>
              </Button>
              <Divider />
              <Button startIcon={<ClipboardText />}>
                <Typography variant="subtitle">Request Account Info</Typography>
              </Button>
              <Divider />
              <Button
                onClick={handleOpenKeyboardShortCut}
                startIcon={<Article />}
              >
                <Typography variant="subtitle">Keyboard shortcuts</Typography>
              </Button>
              <Divider />
              <Button startIcon={<WarningCircle />}>
                <Typography variant="subtitle">Help</Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* content, setting icons */}
        <Stack
          sx={{ width: "100%", height: "100%" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          {/* logo setting */}
          <img width={222} height={222} src={icons.settings} alt="settings" />

          <Typography variant="caption">
            Select a conversation or start a{" "}
            <Link
              to="/settings/newone"
              component={RouterLink}
              variant="subtitle"
            >
              new one
            </Link>
          </Typography>
        </Stack>

        <ShortcutDialog
          open={isOpenKeyboardShortcuts}
          handleClose={handleCloseKeyboardShortCut}
        />
      </Stack>
    </Box>
  );
};

export default Settings;
