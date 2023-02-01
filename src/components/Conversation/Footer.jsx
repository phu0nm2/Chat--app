import React from 'react';

import { Box, Stack, IconButton, TextField, InputAdornment, Fab, Tooltip } from '@mui/material';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';

import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

import { Camera, File, Image, Sticker, User } from 'phosphor-react';

const Actions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo/Video',
  },
  {
    color: '#1b8cfe',
    icon: <Sticker size={24} />,
    y: 172,
    title: 'Stickers',
  },
  {
    color: '#0172e4',
    icon: <Camera size={24} />,
    y: 242,
    title: 'Image',
  },
  {
    color: '#0159b2',
    icon: <File size={24} />,
    y: 312,
    title: 'Document',
  },
  {
    color: '#013f7f',
    icon: <User size={24} />,
    y: 382,
    title: 'Contact',
  },
];

const ChatInput = ({ setIsOpenPicker }) => {
  //toggle for LinkSimple actions
  const [isOpenActions, setIsOpenActions] = React.useState(false);

  const handleOpenActions = () => {
    setIsOpenActions((prev) => !prev);
  };

  const handleOpenPicker = () => {
    setIsOpenPicker((prev) => !prev);
  };
  return (
    <TextField
      fullWidth
      placeholder="Write a messenger..."
      // truyền props từ material UI để thêm icons link & emoji
      InputProps={{
        startAdornment: (
          <>
            <Stack sx={{ width: 'max-content', position: 'relative', display: isOpenActions ? 'block' : 'none' }}>
              {Actions.map((item) => (
                <Tooltip
                  title={item.title}
                  placement="right"
                  // sx={{ color: item.color }}
                >
                  <Fab
                    sx={{ position: 'absolute', top: -item.y, backgroundColor: item.color, margin: '8px' }}
                    size="small"
                    color="secondary"
                    aria-label="add"
                  >
                    {item.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={handleOpenActions}>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <LinkSimple />
                </Fab>
              </IconButton>
            </InputAdornment>
          </>
        ),

        //  button to picker icons
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleOpenPicker}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const [isOpenPicker, setIsOpenPicker] = React.useState(false);

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
          <Box
            sx={{
              display: isOpenPicker ? 'inline' : 'none',
              zIndex: 10,
              position: 'fixed',
              bottom: '81px',
              right: '82px',
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setIsOpenPicker={setIsOpenPicker} />
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
          {/* sent icons */}
          <IconButton>
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
