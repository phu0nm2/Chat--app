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
import { Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import { DarkLightSwitch } from "../../components/StylesMaterial/DarkLightSwitch";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChatCircleDots, GearSix, Phone, User } from "phosphor-react";
import "./Sidebar.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/user";

// const getPatch = (index) => {
//   switch (index) {
//     case 3:
//       return "/settings";

//     default:
//       break;
//   }
// };

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
  // const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleChangeTab = (e) => {
  //   setSelected(e);
  //   navigate(getPatch(e));
  // };

  const handleRedirectMenu = (e) => {
    navigate(getMenuPatch(e));
    if (e === 2) {
      dispatch(logout());
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        // backgroundColor: "blue",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 129,
        maxWidth: 120,
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
              <IconButton>
                <User />
              </IconButton>
            </NavLink>

            <NavLink
              to="/call"
              className={({ isActive }) =>
                "sidebar_item " + (isActive ? "active" : "")
              }
            >
              <IconButton>
                <Phone />
              </IconButton>
            </NavLink>

            <Divider sx={{ width: 48 }} />

            {/* map setting Icon */}
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                "sidebar_item " + (isActive ? "active" : "")
              }
            >
              <IconButton>
                <GearSix />
              </IconButton>
            </NavLink>
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
