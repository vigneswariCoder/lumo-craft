import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Support = () => {
  return (
    <Box id='contact' sx={{ py: 8, bgcolor: '#202020' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Support & Help
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Need assistance? We're here to help!
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Mail size={24} style={{ marginRight: 16 }} />
                <Typography>support@game.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Phone size={24} style={{ marginRight: 16 }} />
                <Typography>1-800-GAME-SUPPORT</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <MessageCircle size={24} style={{ marginRight: 16 }} />
                <Typography>Live Chat (24/7)</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate>
              <Typography variant="h5" gutterBottom>
                Send us a message
              </Typography>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;