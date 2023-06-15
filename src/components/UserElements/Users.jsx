import React from "react";

import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import { StyledChatBox } from "../StylesMaterial/StyledChatBox";
import { StyledBadge } from "../StylesMaterial/StyledBadge";

import { socket } from "../../socket";

const user_id = localStorage.getItem("user_id");

const Users = ({ online, img, firstName, lastName, _id }) => {
  const theme = useTheme();

  const name = `${firstName} ${lastName}`;
  // console.log("user_id", user_id);
  // console.log("name", name);

  const handleSentRequest = () => {
    socket.emit("friend_request", { to: _id, from: user_id }, () => {
      alert("request sent");
    });
    console.log("request_sent");
  };

  return (
    <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems={"center"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Button onClick={handleSentRequest}>Send Request</Button>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

export default Users;
