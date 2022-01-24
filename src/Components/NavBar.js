import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/MailOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/HomeOutlined';

import StyledNavBar from '../Styles/StyledNavBar';

const open = true;

function NavBar() {
  return (
    <StyledNavBar variant='persistent' anchor='left' open={open}>
      {/* <Divider /> */}
      <List>
        <ListItem button component={'li'} className='active'>
          <ListItemIcon>
            <HomeIcon color='inherit' />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button component={'li'} className=''>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Contacts'} />
        </ListItem>
        <ListItem button component={'li'} className=''>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary={'Companies'} />
        </ListItem>
      </List>
      <Divider variant='middle' />
      <List>
        <ListItem button component={'li'} className=''>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'Mail'} />
        </ListItem>
      </List>
    </StyledNavBar>
  );
}

export default NavBar;
