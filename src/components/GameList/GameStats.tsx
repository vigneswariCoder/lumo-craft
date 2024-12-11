import React from 'react';
import { Box, Typography } from '@mui/material';
import { Gamepad2, Trophy, Users } from 'lucide-react';
import { Game } from '../../types/game';

interface GameStatsProps {
  game: Game;
}

const GameStats = ({ game }: GameStatsProps) => {
  const stats = [
    { icon: <Users size={20} />, text: `${game.players} Players` },
    { icon: <Trophy size={20} />, text: `${game.achievements} Achievements` },
    { icon: <Gamepad2 size={20} />, text: game.platform },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
      {stats.map((stat, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {stat.icon}
          <Typography variant="body2">{stat.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GameStats;