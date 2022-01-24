import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import StyledLogin from '../Styles/StyedLogin';

const Login = () => {
  return (
    <StyledLogin container>
      <Grid item xs={12} md={2} className='Form'>
        <Box className='Form__Title'>
          <Typography variant='h5'>Login Form</Typography>
        </Box>
        <form autoComplete='off'>
          <Grid
            container
            rowSpacing={1}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Grid item xs={5}>
              <Typography>Username</Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField type={'text'} autoFocus required fullWidth />
            </Grid>
            <Grid item xs={5}>
              <Typography>Password</Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField type={'password'} required fullWidth />
            </Grid>
            <Grid item xs={5}>
              <Button
                variant='outlined'
                size='large'
                type='reset'
                color='error'
                disableElevation
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Button variant='outlined' size='large' type='submit' fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={10}>
        <Typography>Content</Typography>
      </Grid>
    </StyledLogin>
  );
};

export default Login;
