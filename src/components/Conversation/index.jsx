import React from 'react';

import { Avatar, Box, Stack, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';

// with badege (tạo thông báo nhỏ kế bên)
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

// const StyledInput = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     paddingTop: '12px',
//     paddingBottom: '12px',
//   },
// }));

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

        {/* chat content */}
        <Box
          width={'100%'}
          sx={{ flexGrow: 1 }}
        ></Box>

        {/* chat footer */}
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
      </Stack>
    </>
  );
};

export default Conversation;
