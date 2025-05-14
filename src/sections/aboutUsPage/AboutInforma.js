import React from 'react';
import { m } from 'framer-motion';
import useLocales from 'src/hooks/useLocales';
// material
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';

// ------------------------------------------------------------------------------------

function AboutInforma() {
  const { translate } = useLocales();

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
                <Typography variant="overline">
                  {translate('pagesTranslations.aboutUsPageTranslations.aboutInforma.subtitle')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    '&:after': {
                      content: `'${translate('pagesTranslations.aboutUsPageTranslations.aboutInforma.gradientTitle')}'`,
                      ml: 2,
                      background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                    },
                  }}
                  variant="h2"
                >
                  {translate('pagesTranslations.aboutUsPageTranslations.aboutInforma.title')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  {translate('pagesTranslations.aboutUsPageTranslations.aboutInforma.description')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => window.open('https://wa.me/201019484861')}
                  startIcon={<FitnessCenterIcon />}
                  variant="contained"
                >
                  {translate('pagesTranslations.aboutUsPageTranslations.aboutInforma.actionButton')}
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
