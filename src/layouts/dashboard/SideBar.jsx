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
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const theme = useTheme();
  // const navigate = useNavigate();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = React.useState(0);

  const handleChangeTab = (e) => {
    setSelected(e);
    // navigate("/settings");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                <Link to="/settings" key={item.index}>
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
                <Link to="/settings" key={item.index}>
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
    </Box>
  );
};

export default SideBar;
