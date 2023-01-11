import React from 'react';

import { Box, Stack, useTheme } from '@mui/material';

import ConversationHeader from './ConversationHeader';
import ConversationFooter from './ConversationFooter';
import Messenger from './Messenger';

const Conversation = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        height={'100%'}
        maxHeight={'100vh'}
        width={'100%'}
      >
        {/* chat header */}
        <ConversationHeader />
        {/* chat content */}
        <Box
          width={'100%'}
          // height={'100%'}
          sx={{
            flexGrow: 1,
            overflowY: 'scroll',
            backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.paper,
          }}
        >
          <Messenger />
        </Box>

        {/* chat footer */}
        <ConversationFooter />
      </Stack>
    </>
  );
};

export default Conversation;
