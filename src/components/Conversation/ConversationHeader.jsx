import React from 'react';

import { Avatar, Box, Stack, Typography, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';

import { StyledBadge } from '../StylesMaterial/StyledBadge';

const ConversationHeader = () => {
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
        boxShadow: '0 0 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ height: '100%', width: '100%' }}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
            </StyledBadge>
          </Box>

          <Stack spacing={0.25}>
            <Typography variant="caption">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>

        {/* icons action */}
        <Stack
          direction={'row'}
          p={1}
        >
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone></Phone>
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>

          {/* gạch dọc */}
          <Divider
            orientation="vertical"
            flexItem
          />

          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConversationHeader;
