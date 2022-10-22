import React from 'react';
import { m } from 'framer-motion';
// material
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';

// ------------------------------------------------------------------------------------

function AboutInforma() {
  return (
    <MotionViewport>
      <SectionWrapper>
        <Grid container columnSpacing={12} spacing={3}>
          <Grid item xs={12} md={6}>
            <Card component={m.div} variants={varFade().inRight}>
              <Box component="img" src="/images/about-informa-section.jpeg" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid component={m.div} variants={varFade().inLeft} container rowSpacing={3}>
              <Grid item xs={12}>
                <Typography variant="overline">About Us</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    '&:after': {
                      content: '"Informa"',
                      ml: 2,
                      background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                    },
                  }}
                  variant="h2"
                >
                  About
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => window.open('https://youtu.be/ID1kB0NYiok?t=178')}
                  startIcon={<YouTubeIcon />}
                  variant="contained"
                >
                  Watch On Youtube
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionWrapper>
    </MotionViewport>
  );
}

export default AboutInforma;
