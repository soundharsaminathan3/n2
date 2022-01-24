import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';

import StyledAppBar from '../Styles/StyledAppBar';
import ToolBar from './ToolBar';
import StyledMenu from '../Styles/StyledMenu';
import SubHeader from './SubHeader';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [settingAnchorEl, setSettingAnchorEl] = React.useState(null);
  const [notificationAnchorEl, setnotificationAnchorEl] = React.useState(null);
  const isProfileMenuOpen = Boolean(anchorEl);
  const isSettingAnchorElMenuOpen = Boolean(settingAnchorEl);
  const isNotificationAnchorElMenuOpen = Boolean(notificationAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingMenuOpen = (event) => {
    setSettingAnchorEl(event.currentTarget);
  };
  const handleNotificationMenuOpen = (event) => {
    setnotificationAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSettingAnchorEl(null);
    setnotificationAnchorEl(null);
  };

  const notificationMenuId = 'notification-menu';

  const notificationMenu = (
    <StyledMenu
      anchorEl={notificationAnchorEl}
      id={notificationMenuId}
      keepMounted
      open={isNotificationAnchorElMenuOpen}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem className={'Menu__Header'} disableRipple>
        Notification
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </StyledMenu>
  );

  const profileMenuId = 'account-menu';

  const profileMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      id={profileMenuId}
      keepMounted
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={'Menu__Header'} disableRipple>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </StyledMenu>
  );
  const settingMenuId = 'setting-menu';
  const settingMenu = (
    <StyledMenu
      anchorEl={settingAnchorEl}
      id={settingMenuId}
      keepMounted
      open={isSettingAnchorElMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={'Menu__Header'} disableRipple>
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </StyledMenu>
  );
  return (
    <StyledAppBar position='fixed' elevation={0}>
      <Box className='Main'>
        <Typography variant='h3' noWrap component='div'>
          {'N2'}
        </Typography>
        <Box className='SubTitle'>
          <Typography>Field</Typography>
          <Typography>Development & Support</Typography>
        </Box>
        <Box></Box>
        <ToolBar
          id={[notificationMenuId, settingMenuId, profileMenuId]}
          active={[
            isNotificationAnchorElMenuOpen,
            isSettingAnchorElMenuOpen,
            isProfileMenuOpen,
          ]}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleSettingMenuOpen={handleSettingMenuOpen}
          handleNotificationMenuOpen={handleNotificationMenuOpen}
        />
        {notificationMenu}
        {settingMenu}
        {profileMenu}
      </Box>
      <SubHeader />
    </StyledAppBar>
  );
};

export default Header;
