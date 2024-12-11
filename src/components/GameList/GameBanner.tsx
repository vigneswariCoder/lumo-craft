import React from 'react';
import { Box } from '@mui/material';
import { Game } from '../../types/game';

interface GameBannerProps {
  game: Game;
}

const GameBanner = ({ game }: GameBannerProps) => {
  return (
    <Box sx={{ flex: '0 0 60%' }}>
      <img
        src={game.banner}
        alt={game.title}
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        }}
      />
    </Box>
  );
};

export default GameBanner;