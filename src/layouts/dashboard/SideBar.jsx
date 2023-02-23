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
} from "@mui/material";

import { faker } from "@faker-js/faker";

import icons from "../../assets/Images";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import { DarkLightSwitch } from "../../components/StylesMaterial/DarkLightSwitch";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChatCircleDots, Phone, User } from "phosphor-react";
import "./Sidebar.scss";

const getPatch = (index) => {
  switch (index) {
    case 3:
      return "/settings";

    default:
      break;
  }
};
const getMenuPatch = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      // need update isAuth = false
      return "/auth/login";
    default:
      break;
  }
};

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTab = (e) => {
    setSelected(e);
    navigate(getPatch(e));
  };

  const handleRedirectMenu = (e) => {
    navigate(getMenuPatch(e));
    console.log(e);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 129,
        p: 2,
      }}
    >
      <Stack
        direction={"column"}
        spacing={3}
        sx={{
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
            <Link to="/app">
              <img
                style={{ margin: "0 auto", padding: "13.5px 0" }}
                src={icons.budgie}
                alt="logo"
              />
            </Link>
          </Box>

          {/* render sidebar Icons */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            sx={{ width: "max-content" }}
            className="sidebar"
          >
            <NavLink
              to="/app"
              className={({ isActive }) =>
                "sidebar_item " + (isActive ? "active" : "")
              }
            >
              <IconButton>
                <ChatCircleDots />
              </IconButton>
            </NavLink>

            <NavLink
              to="/group"
              className={({ isActive }) =>
                "sidebar_item " + (isActive ? "active" : "")
              }
            >
              <IconButton className="">
                <User />
              </IconButton>
            </NavLink>

            <NavLink
              to="/call"
              className={({ isActive }) =>
                "sidebar_item " + (isActive ? "active" : "")
              }
            >
              <IconButton className="">
                <Phone />
              </IconButton>
            </NavLink>
            {/* {Nav_Buttons.map((item) =>
              item.index === selected ? (
                <Box
                  p={0.5}
                  key={item.index}
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
                <IconButton
                  key={item.index}
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
              ),
            )} */}
            <Divider sx={{ width: 48 }} />

            {/* map setting Icon */}
            {Nav_Setting.map((item, i) =>
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
                <IconButton
                  key={item.index}
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
                    onClick={() => handleRedirectMenu(i)}
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
    </Box>
  );
};

export default SideBar;
