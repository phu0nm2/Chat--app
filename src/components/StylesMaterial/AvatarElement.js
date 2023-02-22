import { StyledBadge } from "../../components/StylesMaterial/StyledBadge";
import { Box, Typography, Stack, Avatar, Badge, useTheme } from "@mui/material";

const AvatarElement = (props) => {
  const theme = useTheme();
  // const rs = ChatList.filter((items) => items?.pinned);
  // rs.map((item) => console.log(item));
  const { id, img, name, msg, time, unread, pinned, online } = props;

  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : "#4b4f55",
        borderRadius: 1,
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
              <Avatar src={img} alt="avatar" />
            </StyledBadge>
          ) : (
            <Avatar src={img} alt="avatar" />
          )}

          <Stack>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === "light" ? "#030303" : "gray"}
            >
              {name}
            </Typography>
            <Typography variant="caption" color={"#7C7C7D"}>
              {msg}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems="center">
          <Typography variant="caption" color={"#686768"}>
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};
export default AvatarElement;
