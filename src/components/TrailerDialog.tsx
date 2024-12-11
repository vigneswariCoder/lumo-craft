import React from 'react';
import { Dialog, DialogContent, IconButton, Box } from '@mui/material';
import { X } from 'lucide-react';
import ReactPlayer from 'react-player';

interface TrailerDialogProps {
  open: boolean;
  onClose: () => void;
}

const TrailerDialog = ({ open, onClose }: TrailerDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          backgroundImage: 'none',
          position: 'relative'
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
          zIndex: 1,
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <X />
      </IconButton>
      <DialogContent sx={{ p: 0, bgcolor: 'black' }}>
        <Box sx={{ position: 'relative', pt: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            playing={open}
            controls
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TrailerDialog;