import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Game } from '../../types/game';
import GameGenres from './GameGenres';
import GameStats from './GameStats';
import GameActions from './GameActions';

interface GameDetailsProps {
  game: Game;
}

const GameDetails = ({ game }: GameDetailsProps) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      sx={{ color: 'white', flex: 1, pl: 4 }}
    >
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          background: 'linear-gradient(45deg, #00ff87, #60efff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {game.title}
      </Typography>

      <GameGenres genres={game.genres} rating={game.rating} />

      <Typography variant="body1" sx={{ mb: 3 }}>
        {game.description}
      </Typography>

      <GameStats game={game} />
      <GameActions />
    </Box>
  );
};

export default GameDetails;