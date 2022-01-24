import React from 'react';
import { Badge, IconButton } from '@mui/material';

import StyledAppBarToolBar from '../Styles/StyledAppBarToolbar';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const ToolBar = ({
  id,
  active,
  handleProfileMenuOpen,
  handleSettingMenuOpen,
  handleNotificationMenuOpen,
}) => {
  return (
    <StyledAppBarToolBar>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={id[0]}
        aria-haspopup='true'
        onClick={handleNotificationMenuOpen}
        color='inherit'
        className={active[0] ? 'active' : ''}
      >
        <Badge badgeContent={4} color='success'>
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={id[1]}
        aria-haspopup='true'
        onClick={handleSettingMenuOpen}
        color='inherit'
        className={active[1] ? 'active' : ''}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={id[2]}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
        className={active[2] ? 'active' : ''}
      >
        <AccountCircleOutlinedIcon />
      </IconButton>
    </StyledAppBarToolBar>
  );
};

export default ToolBar;
