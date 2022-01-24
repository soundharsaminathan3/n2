import { AppBar } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) =>
  sx({
    '.Main': {
      bgcolor: theme.palette.common.bg,
      color: theme.palette.common.color,
      height: '50px',
      borderBottom: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: ['space-between', 'flex-start'],
      px: ['5px', '10px', '15px'],
      '.MuiTypography-h3': {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        pr: ['5px', '8px'],
      },

      '.MuiBox-root': {
        display: ['none', 'block'],
        order: 3,
        flexGrow: 1,
      },
    },
    '.SubHeader': {
      bgcolor: theme.palette.common.bg,
      color: theme.palette.common.color,
      borderBottom: 1,
      display: 'flex',
      '.Header__Nav': {
        pl: ['0px', '15px'],
        py: '0px',
        display: 'flex',

        height: '36px',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        '.MuiButtonBase-root.AppsIcon': {
          border: 0,
        },
        '.MuiButtonBase-root': {
          borderTop: 3,
          borderBottom: 3,
          borderColor: 'transparent',
          '.MuiListItemIcon-root': {
            minWidth: '24px',
            color: theme.palette.common.color,
          },
          '&:hover': {
            borderBottomColor: theme.palette.primary.main,
            '.MuiListItemIcon-root': {
              color: theme.palette.primary.main,
            },
          },
        },
        '.MuiListItemText-root': {
          pr: '15px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',

          '.MuiTypography-root': {
            fontWeight: 500,
          },
          '&:hover': {
            color: theme.palette.primary.main,
            borderBottomColor: theme.palette.primary.main,
          },
        },

        '.MuiButtonBase-root.MuiListItem-root': {
          p: '8px',
          height: '36px',
        },
      },
    },
  })
);

export default StyledAppBar;
