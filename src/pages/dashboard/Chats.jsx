import React from 'react';

import { Box, IconButton, Typography, Stack, Button, Divider, Avatar, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import icons from '../../assets/Images';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { StyledBadge } from '../../components/StylesMaterial/StyledBadge';
import { Search, SearchIconWrapper } from '../../components/StylesMaterial/Search';
import { StyledInputBase } from '../../components/StylesMaterial/StyledInputBase';

const AvatarElement = (props) => {
  const theme = useTheme();
  // const rs = ChatList.filter((items) => items?.pinned);
  // rs.map((item) => console.log(item));
  const { id, img, name, msg, time, unread, pinned, online } = props;

  return (
    <Box
      p={1.5}
      sx={{
        width: '100%',
        height: 60,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#4b4f55',
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
            <Stack spacing={2}>
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
              spacing={2}
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
