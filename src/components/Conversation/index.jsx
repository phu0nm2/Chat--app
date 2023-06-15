import React from "react";

import { Box, Stack, useTheme } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

import { Chat_History } from "../../data";
import {
  DocMessage,
  LinkMessage,
  MediaMessage,
  MsgTimeline,
  ReplyMessage,
  TextMessage,
} from "./MsgTypes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../socket";
import {
  fetchCurrentMessage,
  setCurrentConversation,
} from "../../redux/slices/conversation";
import useResponsive from "../../hooks/useResponsive";
import { useRef } from "react";

const MessageConversation = ({ menu, isMoblie }) => {
  const dispatch = useDispatch();
  const { conversations, current_message } = useSelector(
    (state) => state.conversation.direct_chat,
  );

  const { room_id } = useSelector((state) => state.conversation);

  useEffect(() => {
    const current = conversations.find((el) => el?.id === room_id);
    socket?.emit("get_messages", { conversation_id: current?.id }, (data) => {
      // data => list of mess
      console.log(data, "list of mess");
      dispatch(fetchCurrentMessage({ messages: data }));
    });

    dispatch(setCurrentConversation(current));
  }, [dispatch, conversations, room_id]);

  return (
    <Box p={isMoblie ? 1 : 3}>
      <Stack>
        {current_message.map((el, i) => {
          switch (el.type) {
            case "divider":
              // timeline
              return <MsgTimeline key={i} ele={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMessage key={i} el={el} menu={menu} />;
                case "doc":
                  return <DocMessage key={i} el={el} menu={menu} />;
                case "link":
                  return <LinkMessage key={i} el={el} menu={menu} />;
                case "reply":
                  return <ReplyMessage key={i} el={el} menu={menu} />;

                default:
                  // text msg
                  return (
                    <TextMessage key={i} el={el} menu={menu}></TextMessage>
                  );
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

const ChatComponent = () => {
  const theme = useTheme();
  const isMoblie = useResponsive("between", "md", "xs", "sm");
  const messageListRef = useRef(null);

  const { current_message } = useSelector(
    (state) => state.conversation.direct_chat,
  );

  useEffect(() => {
    // Scroll to the bottom of the message list when new message are added
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [current_message]);

  return (
    <>
      <Stack
        height={"100%"}
        maxHeight={"100vh"}
        width={isMoblie ? "100vw" : "auto"}
      >
        {/* chat header */}
        <Header />
        {/* chat content */}
        <Box
          ref={messageListRef}
          width={"100%"}
          // height={'100%'}
          sx={{
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
          }}
        >
          <MessageConversation menu={true} isMoblie={isMoblie} />
        </Box>

        {/* chat footer */}
        <Footer />
      </Stack>
    </>
  );
};

export { MessageConversation };
export default ChatComponent;
