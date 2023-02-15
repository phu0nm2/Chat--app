import React from "react";
import {
  Box,
  IconButton,
  Stack,
  useTheme,
  Divider,
  Avatar,
  Menu,
  MenuItem,
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
import useSettings from "../../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../../data";
import { DarkLightSwitch } from "../../../components/StylesMaterial/DarkLightSwitch";
import ShortcutDialog from "../../../components/Sections/settings/ShortcutDialog";

const Settings = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = React.useState(0);
  const [isOpenKeyboardShortcuts, setIsOpenKeyboardShortcuts] =
    React.useState(false);

  const handleOpenKeyboardShortCut = () => {
    setIsOpenKeyboardShortcuts(true);
  };
  const handleCloseKeyboardShortCut = () => {
    setIsOpenKeyboardShortcuts(false);
  };

  const handleChangeTab = (e) => {
    setSelected(e);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        p: 2,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          height: "100%",
        }}
      >
        <Stack
          direction={"column"}
          spacing={3}
          sx={{
            width: "129px",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ alignItems: "center" }} spacing={3}>
            <Box
              sx={{
                bgcolor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img
                style={{ margin: "0 auto", padding: "13.5px 0" }}
                src={icons.budgie}
                alt="icon"
              />
            </Box>
            <Stack spacing={3} sx={{ width: "max-content" }}>
              {/* render sidebar Icons */}
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <Box
                    key={item.index}
                    p={0.5}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ color: "#fff", width: "max-content" }}>
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <Box key={item.index} p={0.5} sx={{ borderRadius: 1.5 }}>
                    <IconButton
                      onClick={() => handleChangeTab(item.index)}
                      sx={{
                        color:
                          theme.palette.mode === "light"
                            ? "#000"
                            : theme.palette.text.primary,
                        width: "max-content",
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ),
              )}
              <Divider sx={{ width: 48 }} /> {/* hr */}
              {/* map setting Icon */}
              {Nav_Setting.map((item, i) =>
                item.index === selected ? (
                  <Link to="/settings" component={RouterLink} key={item.index}>
                    <Box
                      p={0.5}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton sx={{ color: "#fff", width: "max-content" }}>
                        {item.icon}
                      </IconButton>
                    </Box>
                  </Link>
                ) : (
                  <Link to="/settings" component={RouterLink} key={item.index}>
                    <Box p={0.5} sx={{ borderRadius: 1.5 }}>
                      <IconButton
                        onClick={() => handleChangeTab(item.index)}
                        sx={{
                          color:
                            theme.palette.mode === "light"
                              ? "#000"
                              : theme.palette.text.primary,
                          width: "max-content",
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    </Box>
                  </Link>
                ),
              )}
            </Stack>
          </Stack>

          {/*switch dark/light  */}
          <Stack spacing={3}>
            <DarkLightSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar
              src={faker.image.avatar()}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />

            {/* popup */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Stack p={1}>
                {Profile_Menu.map((item, i) => (
                  <MenuItem key={i} onClick={handleClose}>
                    <Stack
                      sx={{ width: 100 }}
                      direction="row"
                      justifyContent={"space-between"}
                    >
                      <span>{item.title}</span>
                      <span>{item.icon}</span>
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
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
