import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 2,
        mt: 'auto', 
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © 2024 Your Company. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
