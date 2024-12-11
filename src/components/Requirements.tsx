import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const Requirements = () => {
  const specs = {
    minimum: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700K',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '50 GB SSD'
    }
  };

  return (
    <Box id='requirements' sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          System Requirements
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Make sure your system meets these requirements to enjoy the game
        </Typography>
        <Grid container spacing={4}>
          {Object.entries(specs).map(([type, requirements]) => (
            <Grid item xs={12} md={6} key={type}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ textTransform: 'capitalize' }}>
                  {type} Requirements
                </Typography>
                {Object.entries(requirements).map(([key, value]) => (
                  <Box key={key} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                      {key}:
                    </Typography>
                    <Typography variant="body1">
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Requirements;