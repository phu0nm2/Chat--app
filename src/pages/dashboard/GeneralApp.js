import React from 'react';

import { Box } from '@mui/system';

import Chats from './Chats';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Conversation from '../../components/Conversation';
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app || {});
  // console.log(sidebar);

  return (
    <>
      <Stack
        direction={'row'}
        sx={{ width: '100%' }}
      >
        <Chats />

        <Box
          sx={{
            // sidebar left: 129px + 320px = 449px, contact: 350px
            width: sidebar.open ? 'calc(100vw - 799px)' : 'calc(100vw - 440px)',
            height: '100%',
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>

        {/* contact */}
        {sidebar.open && <Contact />}
      </Stack>
    </>
  );
};

export default GeneralApp;
