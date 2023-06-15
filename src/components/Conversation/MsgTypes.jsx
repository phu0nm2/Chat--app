import React from "react";

import {
  Divider,
  Stack,
  Typography,
  Box,
  Link,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data";

const DotsThree = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={20}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Message_options.map((item, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const TextMessage = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      p={2}
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        p={1}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      {/* menu dots three */}
      {menu && <DotsThree />}
    </Stack>
  );
};

export const MediaMessage = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      p={2}
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 250, maxWidth: 250, borderRadius: "10px" }}
          />
        </Stack>
      </Box>
      {menu && <DotsThree />}
    </Stack>
  );
};

export const LinkMessage = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      p={2}
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Button>
          <img
            src={el.preview}
            alt={el.message}
            style={{ maxHeight: 250, maxWidth: 250, borderRadius: "10px" }}
          />
        </Button>
      </Box>
      {/* <Link href="https://www.google.com/">
        <DownloadSimple size={25} />
      </Link> */}
      {menu && <DotsThree />}
    </Stack>
  );
};

export const DocMessage = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      p={2}
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack
          p={2}
          spacing={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
          }}
        >
          <Image size={25} />
          <Typography variant="captain">RandomImg.png</Typography>
          <DownloadSimple size={25} />
        </Stack>

        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      {menu && <DotsThree />}
    </Stack>
  );
};

export const ReplyMessage = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      p={2}
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack direction={"column"} spacing={1} p={1}>
          <Stack
            p={1}
            sx={{
              borderRadius: 1,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography variant="body2">{el.message}</Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && <DotsThree />}
    </Stack>
  );
};

export const MsgTimeline = ({ ele }) => {
  const theme = useTheme();

  //   console.log(props);
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Divider width="46%" />

      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {ele.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};
