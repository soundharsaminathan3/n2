import { Menu } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/material';

const StyledMenu = styled(Menu)(({ theme }) =>
  sx({
    '.MuiList-root': {
      pt: 0,
    },
    '.MuiPaper-root': {
      bgcolor: theme.palette.common.bg,
      color: theme.palette.common.color,
      border: 1,
      borderColor: theme.palette.common.color,
    },
    '.Menu__Header': {
      bgcolor: theme.palette.primary.main,
      color: theme.palette.common.bg,
      fontWeight: 700,
    },
  })
);

export default StyledMenu;
