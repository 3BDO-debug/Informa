import React from 'react';
// material
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// componenents

// ------------------------------------------------------------------------------------

function HaveQuestions() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[200] }}>
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="overline">Contact us</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: 'center' }} variant="h2">
              Still have a questions ?
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" startIcon={<WhatsAppIcon />}>
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HaveQuestions;
