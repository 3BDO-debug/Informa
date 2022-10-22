import React from 'react';
import PropTypes from 'prop-types';
// material
import { Box, Grid, styled, Typography } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, TextAnimate } from 'src/components/animate';

// -----------------------------------------------------------------------------------------------------------

PageIntro.propTypes = {
  coverImageVariants: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function PageIntro({ coverImageVariants, subtitle, description, title }) {
  return (
    <Box
      sx={{
        backgroundImage: coverImageVariants,
        height: {
          xs: 450,
          md: 560,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: {
          xs: '120%',
          md: '100%',
        },
      }}
    >
      <MotionViewport>
        <SectionWrapper>
          <Grid container spacing={1} paddingTop={17}>
            <Grid item xs={12}>
              <Typography variant="overline" color="white">
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: {
                    xs: '87%',
                    md: '100%',
                  },
                }}
              >
                <TextAnimate text={title} isGradient textVariant="h2" />
              </Box>

              {/*  <GradientText
                sx={{
                  width: {
                    xs: '100%',
                    md: '50%',
                  },
                }}
                variant="gradientText"
                color="white"
              >
                {title}
              </GradientText> */}
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  width: {
                    xs: '100%',
                    md: '35%',
                  },
                }}
                variant="body1"
                color="text.secondary"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </SectionWrapper>
      </MotionViewport>
    </Box>
  );
}

export default PageIntro;
