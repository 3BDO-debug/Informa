import React, { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// material
import { Box, Card, Grid, Paper, Typography, useTheme } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/Image';

// ------------------------------------------------------------------------------------------------------------------

function Transformations() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2700,
    slidesToScroll: 1,
    easing: 'ease-in-out',
    speed: 1000,
  };

  const generateCarouselData = () => {
    const data = [];

    for (let index = 1; index < 7; index++) {
      data.push(`/images/transformations/${index}.JPG`);
    }

    return data;
  };

  return (
    <SectionWrapper>
      <Grid component={MotionViewport} container spacing={3}>
        <Grid component={m.div} variants={varFade().inUp} item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline">Transformations</Typography>
          </Box>
        </Grid>
        <Grid component={m.div} variants={varFade().inUp} item xs={12}>
          <Typography sx={{ textTransform: 'capitalize', textAlign: 'center' }} variant="h2">
            Register now and be a part of great Transformations
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Slider ref={carouselRef} {...settings}>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/1.jpg"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/2.jpg"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/3.jpg"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/4.jpg"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/5.JPG"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/6.jpg"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                pl: {
                  sm: 25,
                },
                pr: {
                  sm: 25,
                },
              }}
            >
              <Paper elevation={15}>
                <Box
                  component="img"
                  sx={{ borderRadius: '8px', objectFit: 'contain' }}
                  src="/images/transformations/7.jpg"
                />
              </Paper>
            </Box>
          </Slider>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Transformations;
