import React from 'react';
import { m } from 'framer-motion';
// material
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
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
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ID1kB0NYiok?start=178"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
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
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send?phone=201090028014&text=Hello%20Informa%2C%20I%20want%20to%20get%20in%20shape.%20'
                    )
                  }
                  startIcon={<FitnessCenterIcon />}
                  variant="contained"
                >
                  Transform your life
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
