import React, { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// material
import { Box, Card, Grid, IconButton, Paper, Typography, useTheme } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/Image';
import useLocales from 'src/hooks/useLocales';

// ------------------------------------------------------------------------------------------------------------------

function Transformations() {
  const carouselRef = useRef(null);
  const theme = useTheme();
  const { translate } = useLocales();

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2700,
    slidesToScroll: 1,
    easing: 'ease-in-out',
    speed: 1000,
    arrows: true,
  };

  const generateCarouselData = () => {
    const data = [];

    for (let index = 1; index < 7; index++) {
      data.push(`/images/transformations/${index}.png`);
    }

    return data;
  };

  const handleCarouselPrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleCarouselNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <SectionWrapper>
      <Grid component={MotionViewport} container spacing={3}>
        <Grid component={m.div} variants={varFade().inUp} item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline">
              {translate('pagesTranslations.homePageTranslations.transformations.subtitle')}
            </Typography>
          </Box>
        </Grid>
        <Grid component={m.div} variants={varFade().inUp} item xs={12}>
          <Typography sx={{ textTransform: 'capitalize', textAlign: 'center' }} variant="h2">
            {translate('pagesTranslations.homePageTranslations.transformations.title')}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton onClick={handleCarouselPrev}>
              <WestIcon />
            </IconButton>
            <IconButton onClick={handleCarouselNext}>
              <EastIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Grid container spacing={3}>
            <Grid
              item
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              md={2}
            >
              <IconButton onClick={handleCarouselPrev}>
                <WestIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={8}>
              <Slider ref={carouselRef} {...settings}>
                {generateCarouselData().map((client) => (
                  <Box
                    sx={{
                      pl: {
                        sm: 25,
                      },
                      pr: {
                        sm: 25,
                      },
                      mb: 4,
                    }}
                  >
                    <Paper elevation={15}>
                      <Box component="img" sx={{ borderRadius: '8px', objectFit: 'contain' }} src={client} />
                    </Paper>
                  </Box>
                ))}
              </Slider>
            </Grid>
            <Grid
              item
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              md={2}
            >
              <IconButton onClick={handleCarouselNext}>
                <EastIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Transformations;
