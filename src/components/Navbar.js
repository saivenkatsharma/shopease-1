import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f06292' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Shop-Ease
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            Cart
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
