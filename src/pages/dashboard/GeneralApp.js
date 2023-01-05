import React from 'react';

import { Box } from '@mui/system';

import Chats from './Chats';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Conversation from '../../components/Conversation';

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={'row'}
        sx={{ width: '100%' }}
      >
        <Chats />

        <Box
          sx={{
            height: '100%',
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
            width: 'calc(100vw - 440px)',
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
