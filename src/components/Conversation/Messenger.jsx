import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { DocMessage, LinkMessage, MediaMessage, MsgTimeline, ReplyMessage, TextMessage } from './MsgTypes';

const Messenger = () => {
  return (
    <Box p={3}>
      <Stack>
        {Chat_History.map((el) => {
          switch (el.type) {
            case 'divider':
              // timeline
              return <MsgTimeline ele={el} />;

            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMessage el={el} />;
                case 'doc':
                  return <DocMessage el={el} />;
                case 'link':
                  return <LinkMessage el={el} />;
                case 'reply':
                  return <ReplyMessage el={el} />;

                default:
                  // text msg
                  return <TextMessage el={el}></TextMessage>;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messenger;
