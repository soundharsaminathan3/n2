import { Grid } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/material';

const StyledLogin = styled(Grid)(({ theme }) =>
  sx({
    '.Form': {
      p: 1,
      borderRight: 1,
      borderColor: theme.palette.common.color,
      '&__Title': {
        textAlign: 'center',
        color: theme.palette.common.bg,
        bgcolor: theme.palette.primary.main,
        mb: 2,
        borderRadius: '5px',
      },
    },
  })
);

export default StyledLogin;
