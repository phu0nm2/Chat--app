import React from 'react';

import { Box, IconButton, Typography, Stack, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import icons from '../../assets/Images';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';

// search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: theme.palette.mode === 'light' ? 'inherit' : 'gray',
  backgroundColor: theme.palette.mode === 'light' ? '#EAF2FE' : '#1d1c1c',
  borderRadius: '20px',
  placeholder: '#709CE6',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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

const AvatarElement = (props) => {
  const theme = useTheme();
  // const rs = ChatList.filter((items) => items?.pinned);
  // rs.map((item) => console.log(item));
  const { id, img, name, msg, time, unread, pinned, online } = props;

  return (
    <Box
      p={1}
      sx={{
        width: '100%',
        height: 60,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1d1c1c',
        borderRadius: 1,
      }}
    >
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                src={img}
                alt="avatar"
              />
            </StyledBadge>
          ) : (
            <Avatar
              src={img}
              alt="avatar"
            />
          )}

          <Stack>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === 'light' ? '#030303' : 'gray'}
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              color={'#7C7C7D'}
            >
              {msg}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={2}
          alignItems="center"
        >
          <Typography
            variant="caption"
            color={'#686768'}
          >
            {time}
          </Typography>
          <Badge
            color="primary"
            badgeContent={unread}
          ></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack sx={{ height: '100vh' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography
            p={1}
            variant="h5"
          >
            Chats
          </Typography>

          <IconButton>
            <img
              src={icons.circleDashed}
              alt="circleDashed"
            />
          </IconButton>
        </Stack>

        <Search sx={{ width: '100%', borderRadius: '20px' }}>
          <SearchIconWrapper>
            <img
              style={{ zIndex: '1' }}
              src={icons.magnifyingGlass}
              alt="magnifyingGlass"
            />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Stack
          direction={'row'}
          p={2}
          spacing={1.5}
        >
          <IconButton>
            <img
              src={icons.ArchiveBox}
              alt="ArchiveBox"
            />
          </IconButton>
          <Button>Archived</Button>
        </Stack>

        <Divider></Divider>

        <Stack
          direction="column"
          sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}
        >
          <SimpleBarStyle
            timeout={500}
            clickOnTrack={false}
          >
            <Stack spacing={1}>
              <Stack p={2}>
                <Typography
                  variant="subtitle1"
                  color={'#676667'}
                >
                  Pinned
                </Typography>
              </Stack>

              {ChatList.filter((items) => items.pinned).map((item, index) => (
                <AvatarElement
                  key={index}
                  {...item}
                />
              ))}
            </Stack>

            <Stack
              direction={'column'}
              spacing={1}
            >
              <Stack p={2}>
                <Typography
                  variant="subtitle1"
                  color={'#676667'}
                >
                  All Chats
                </Typography>
              </Stack>

              {ChatList.filter((items) => !items.pinned).map((item, index) => (
                <AvatarElement
                  key={index}
                  {...item}
                />
              ))}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
