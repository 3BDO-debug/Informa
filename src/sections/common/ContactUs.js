import React from 'react';
// material
import { Box, Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// components

// --------------------------------------------------------------------------------------------------

function ContactUs() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background:
          'linear-gradient(to right, rgba(22, 28, 36, 0) 0%, rgba(22, 28, 36, 1) 50%),url(/images/contact-us-section.jpeg)',
      }}
    >
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container rowSpacing={3} columnSpacing={30}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography color="grey.600" variant="overline">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    '&:after': {
                      content: "'you'",
                      color: theme.palette.primary.main,
                      ml: 2,
                    },
                  }}
                  variant="h2"
                  color="common.white"
                >
                  Talk to us we would like to hear from
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="grey.400" variant="body1">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField label="Full name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Phone Number" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Your message" multiline rows={4} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button endIcon={<SendIcon />} variant="contained">
                    Send
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;
