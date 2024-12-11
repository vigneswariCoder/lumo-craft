import React from 'react';
import { Box, Typography } from '@mui/material';
import { Game } from '../../types/game';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Box sx={{ position: 'relative', height: '100%' }}>
      <img
        src={game.thumbnail}
        alt={game.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
          p: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: 'white' }}>
          {game.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default GameCard;