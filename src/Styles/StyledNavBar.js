import Drawer from '@mui/material/Drawer';
import { styled, experimental_sx as sx } from '@mui/material';

const drawerWidth = 180;

const StyledNavBar = styled(Drawer)(({ theme }) =>
  sx({
    width: drawerWidth,
    display: 'flex',
    borderRight: 1,
    '.MuiListItemIcon-root': {
      color: theme.palette.common.color,
    },
    '.MuiDivider-root ': {
      borderColor: theme.palette.common.color,
    },
    '& .MuiDrawer-paper': {
      bgcolor: theme.palette.common.bg,
      color: theme.palette.common.color,
      width: drawerWidth,
      top: '50px',
      boxSizing: 'border-box',
    },
    '.MuiListItemText-root': {
      '.MuiTypography-root': {
        fontWeight: 600,
      },
    },
    '.MuiButtonBase-root': {
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      '&:hover': {
        bgcolor: theme.palette.common.light,
        '.MuiListItemIcon-root': {
          color: theme.palette.common.active,
        },
        '.MuiListItemText-root ': {
          color: theme.palette.common.active,
        },
      },
      '&.active': {
        bgcolor: theme.palette.common.light,
        fontWeight: 'bold',
        '.MuiListItemIcon-root': {
          color: theme.palette.primary.main,
        },
        '.MuiListItemText-root ': {
          color: theme.palette.primary.main,
        },
      },
    },
  })
);

export default StyledNavBar;
