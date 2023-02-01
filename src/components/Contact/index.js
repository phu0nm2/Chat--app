import { Box, useTheme } from '@mui/material';
import React from 'react';

const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
        width: '350px',
      }}
    >
      Contact
    </Box>
  );
};

export default Contact;
