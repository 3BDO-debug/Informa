import React from 'react';
import { m } from 'framer-motion';
// material
import { Container, Box, Grid, Typography, Card, useTheme } from '@mui/material';
// theme
import palette from 'src/theme/palette';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// -----------------------------------------------------------------------------------------------------

const CertificationCard = ({ certification }) => {
  const theme = useTheme();

  return (
    <Card>
      <Box
        sx={{
          transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: '0.9s',
          }),
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
        component="img"
        width={400}
        height={200}
        src={certification}
      />
    </Card>
  );
};

// -----------------------------------------------------------------------------------------------------

function Certifications() {
  return (
    <MotionViewport>
      <Box
        component={m.div}
        variants={varFade().inUp}
        sx={{ backgroundColor: palette.dark.background.default, marginTop: 10 }}
      >
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                sx={{ display: 'flex', justifyContent: 'center' }}
                variant="overline"
                color={palette.dark.grey[500]}
              >
                Certifications
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                color={palette.dark.text.primary}
                sx={{
                  textTransform: 'capitalize',
                  textAlign: 'center',
                  '&:after': {
                    content: '"Certified"',
                    ml: 2,
                    background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                  },
                }}
              >
                We got our success
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container marginTop={4} spacing={3}>
                <Grid item xs={12} md={3}>
                  <CertificationCard certification="/images/certifications/1.jpg" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CertificationCard certification="/images/certifications/2.jpg" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CertificationCard certification="/images/certifications/3.jpg" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CertificationCard certification="/images/certifications/4.jpg" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MotionViewport>
  );
}

export default Certifications;
