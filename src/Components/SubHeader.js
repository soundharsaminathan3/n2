import React from 'react';

import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, ListItemIcon } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PieChartIcon from '@mui/icons-material/PieChart';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SupportIcon from '@mui/icons-material/Support';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StarIcon from '@mui/icons-material/Star';

function SubHeader() {
  return (
    <Box className='SubHeader'>
      <List className='Header__Nav'>
        <IconButton className='AppsIcon'>
          <AppsIcon />
        </IconButton>
        <ListItem button selected={true}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary={'Reports'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary={'Charts'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DownloadForOfflineIcon />
          </ListItemIcon>
          <ListItemText primary={'Downloads'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText primary={'Support'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeveloperModeIcon />
          </ListItemIcon>
          <ListItemText primary={'Developer'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary={'Favorites'} />
        </ListItem>
      </List>
    </Box>
  );
}

export default SubHeader;
