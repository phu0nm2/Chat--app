import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { StyledBadge } from "./StylesMaterial/StyledBadge";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Badge,
  useTheme,
  alpha,
} from "@mui/material";
import { selectConversation } from "../redux/slices/conversation";

const ChatElement = (props) => {
  const theme = useTheme();
  // const rs = ChatList.filter((items) => items?.pinned);
  // rs.map((item) => console.log(item));
  const { id, img, name, msg, time, unread, pinned, online } = props;

  const dispatch = useDispatch();
  const { room_id } = useSelector((state) => state.conversation);
  const selectedChatId = room_id?.toString();
  let isSelected = +selectedChatId === id;

  if (!selectedChatId) {
    isSelected = false;
  }

  const handleRoomId = () => {
    dispatch(selectConversation({ room_id: id }));
  };

  return (
    <Box
      onClick={handleRoomId}
      p={1}
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: isSelected
          ? theme.palette.mode === "light"
            ? alpha(theme.palette.primary.main, 0.5)
            : theme.palette.primary.main
          : theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.paper,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} alt={name} />
            </StyledBadge>
          ) : (
            <Avatar src={img} alt={name} />
          )}

          <Stack>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
            >
              {msg}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems="center">
          <Typography
            variant="caption"
            color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
          >
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ChatElement;
