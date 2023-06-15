import React from "react";

import { Box } from "@mui/system";

import Chats from "./Chats";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMess from "../../components/SharedMess";
import StartedMess from "../../components/StartedMess";
import NoChat from "../../assets/Illustration/NoChat";
import ChatComponent from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app || {});
  const { chat_type, room_id } = useSelector((state) => state.user || {});
  // console.log(sidebar);

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />

        <Box
          sx={{
            // sidebar left: 129px + 320px = 449px, contact: 350px
            width: sidebar.open ? "calc(100vw - 799px)" : "calc(100vw - 440px)",
            height: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default,
          }}
        >
          {chat_type === "individual" && room_id !== null ? (
            <ChatComponent />
          ) : (
            <Stack
              sx={{ height: "100%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <NoChat />
              <Typography variant="subtitle2">
                Select a conversation or start new one
              </Typography>
            </Stack>
          )}
        </Box>

        {/* contact */}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "MEDIA":
                break;
              case "STARTED":
                return <StartedMess />;
              case "SHARED":
                return <SharedMess />;
              default:
                return <Contact />;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
