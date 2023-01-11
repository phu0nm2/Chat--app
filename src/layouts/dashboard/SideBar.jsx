import React from 'react';

import { Box, IconButton, Stack, useTheme, Divider, Avatar } from '@mui/material';

import { faker } from '@faker-js/faker';

import icons from '../../assets/Images';
import { Nav_Buttons, Nav_Setting } from '../../data';
import useSettings from '../../hooks/useSettings';
import { DarkLightSwitch } from '../../components/StylesMaterial/DarkLightSwitch';
// import AntSwitch from '../../components/AntSwitch';

const SideBar = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = React.useState(0);

  const handleChangeTab = (e) => {
    setSelected(e);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        height: '100vh',
        width: 129,
        p: 2,
      }}
    >
      <Stack
        direction={'column'}
        spacing={3}
        sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Stack
          sx={{ alignItems: 'center' }}
          spacing={3}
        >
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img
              style={{ margin: '0 auto', padding: '13.5px 0' }}
              src={icons.budgie}
              alt="icon"
            />
          </Box>
          <Stack
            spacing={3}
            sx={{ width: 'max-content' }}
          >
            {/* map sidebar Icons */}
            {Nav_Buttons.map((item) =>
              item.index === selected ? (
                <Box
                  key={item.index}
                  p={0.5}
                  sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                >
                  <IconButton sx={{ color: '#fff', width: 'max-content' }}>{item.icon}</IconButton>
                </Box>
              ) : (
                <Box
                  key={item.index}
                  p={0.5}
                  sx={{ borderRadius: 1.5 }}
                >
                  <IconButton
                    onClick={() => handleChangeTab(item.index)}
                    sx={{
                      color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                      width: 'max-content',
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              )
            )}
            <Divider sx={{ width: 48 }} /> {/* hr */}
            {/* map setting Icon */}
            {Nav_Setting.map((item) =>
              item.index === selected ? (
                <Box
                  key={item.index}
                  p={0.5}
                  sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                >
                  <IconButton sx={{ color: '#fff', width: 'max-content' }}>{item.icon}</IconButton>
                </Box>
              ) : (
                <Box
                  key={item.index}
                  p={0.5}
                  sx={{ borderRadius: 1.5 }}
                >
                  <IconButton
                    onClick={() => handleChangeTab(item.index)}
                    sx={{
                      color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                      width: 'max-content',
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              )
            )}
          </Stack>
        </Stack>

        {/*switch dark/light  */}
        <Stack spacing={3}>
          <DarkLightSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()}></Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
