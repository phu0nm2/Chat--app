import React from 'react';

import { Box, Stack, IconButton, TextField, InputAdornment } from '@mui/material';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';

// can change StyledInput to TextField
// const StyledInput = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     paddingTop: '12px',
//     paddingBottom: '12px',
//   },
// }));

const ConversationFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
        boxShadow: '0 0 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack
        direction={'row'}
        p={2}
      >
        <Box sx={{ width: '100%' }}>
          <TextField
            fullWidth
            placeholder="Write a messenger..."
            // truyền props thêm icons link & emoji
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          ml={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: 1.5,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <IconButton>
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConversationFooter;
