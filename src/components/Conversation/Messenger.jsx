import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMessage,
  LinkMessage,
  MediaMessage,
  MsgTimeline,
  ReplyMessage,
  TextMessage,
} from "./MsgTypes";

const Messenger = () => {
  return (
    <Box p={3}>
      <Stack>
        {Chat_History.map((el, i) => {
          switch (el.type) {
            case "divider":
              // timeline
              return <MsgTimeline key={i} ele={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMessage key={i} el={el} />;
                case "doc":
                  return <DocMessage key={i} el={el} />;
                case "link":
                  return <LinkMessage key={i} el={el} />;
                case "reply":
                  return <ReplyMessage key={i} el={el} />;

                default:
                  // text msg
                  return <TextMessage key={i} el={el}></TextMessage>;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messenger;
