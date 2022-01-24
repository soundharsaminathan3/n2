import { Toolbar } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/material';

const StyledAppBarToolBar = styled(Toolbar)(({ theme }) =>
  sx({
    order: [3, 4],
    display: 'flex',
    alignItems: 'center',
    '.MuiIconButton-root': {
      color: theme.palette.common.color,
    },
    '.MuiIconButton-root:hover': {
      color: theme.palette.primary.main,
    },
    '.MuiIconButton-root.active': {
      color: theme.palette.primary.main,
    },
    '.MuiButtonBase-root': {
      display: ['none', 'flex'],
    },
    '.MuiButtonBase-root:last-child': {
      display: 'flex',
    },
  })
);

export default StyledAppBarToolBar;
