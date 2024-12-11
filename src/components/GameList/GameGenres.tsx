import React from 'react';
import { Box, Chip, Rating, Typography } from '@mui/material';

interface GameGenresProps {
  genres: string[];
  rating: number;
}

const GameGenres = ({ genres, rating }: GameGenresProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      <Rating value={rating} readOnly precision={0.5} />
      <Typography variant="body2">({rating} / 5)</Typography>
      {genres.map((genre) => (
        <Chip
          key={genre}
          label={genre}
          size="small"
          sx={{
            bgcolor: 'rgba(0,255,135,0.1)',
            color: '#00ff87',
            borderRadius: '4px',
          }}
        />
      ))}
    </Box>
  );
};

export default GameGenres;