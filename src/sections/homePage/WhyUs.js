import React from 'react';
// material
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------

function WhyUs() {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
            <Typography
              variant="h3"
              sx={{
                textTransform: 'uppercase',
                '&:after': {
                  content: "'Informa'",
                  color: theme.palette.primary.main,
                  ml: 1,
                },
              }}
            >
              Why To Choose
            </Typography>

            <Box component="img" src="/logo-icon.png" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'center',
              margin: '0 auto',
              width: {
                xs: '100%',
                md: '80%',
                lg: '60%',
              },
            }}
            variant="body1"
          >
            World is committed to making participation in the event a harassment free experience for everyone,
            regardless of level of experience.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3">1000</Typography>
            <Box sx={{ width: '25px', height: '3px', backgroundColor: theme.palette.grey[700], mt: 1, mb: 1 }} />
            <Typography variant="subtitle1">Client</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3">1000</Typography>
            <Box sx={{ width: '25px', height: '3px', backgroundColor: theme.palette.grey[700], mt: 1, mb: 1 }} />
            <Typography variant="subtitle1">Client</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3">1000</Typography>
            <Box sx={{ width: '25px', height: '3px', backgroundColor: theme.palette.grey[700], mt: 1, mb: 1 }} />
            <Typography variant="subtitle1">Client</Typography>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default WhyUs;
