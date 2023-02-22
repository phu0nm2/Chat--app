import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { StyledBadge } from "./StylesMaterial/StyledBadge";
import { faker } from "@faker-js/faker";
import { ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

const CallElement = ({ online, incoming, missed, time, callVideo }) => {
  const theme = useTheme();

  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        height: 60,
        backgroundColor:
          theme.palette.mode === "light" ? "rgba(217,213,213,0.7)" : "#4b4f55",
        borderRadius: 1,
      }}
    >
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}

          <Stack>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
            >
              {faker.name.fullName()}
            </Typography>

            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              {!!incoming ? (
                <ArrowUpRight
                  color={missed ? "red" : "green"}
                  width={17}
                  height={17}
                />
              ) : (
                <ArrowUpRight
                  color={missed ? "green" : "red"}
                  width={17}
                  height={17}
                />
              )}

              <Typography
                color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
                variant="caption"
              >
                {faker.date.weekday()}
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.mode === "light" ? "#000000" : "#ffff"}
              >
                {time}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <IconButton>
            <Phone color="green" />
          </IconButton>
          {!!callVideo && (
            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CallElement;
