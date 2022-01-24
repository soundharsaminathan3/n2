import React, { useState } from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { Box } from '@mui/material';
import Login from './Login';

const Home = () => {
  const [login] = useState(false);
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {login ? (
        <Box sx={{ display: 'flex', height: '100%', pt: '86px' }}>
          <NavBar />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', height: '100%', pt: '50px' }}>
          <Login />
        </Box>
      )}
    </Box>
  );
};

export default Home;
