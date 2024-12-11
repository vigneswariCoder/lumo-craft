import React from 'react';
import { Box, Button } from '@mui/material';
import { Gamepad2 } from 'lucide-react';

const GameActions = () => {
  return (
    <Box>
      <Button
        variant="contained"
        size="large"
        startIcon={<Gamepad2 />}
        sx={{ mr: 2 }}
      >
        Play Now
      </Button>
      <Button
        variant="outlined"
        size="large"
        sx={{
          borderColor: 'rgba(255,255,255,0.2)',
          '&:hover': { borderColor: 'primary.main' },
        }}
      >
        Add to Wishlist
      </Button>
    </Box>
  );
};

export default GameActions;