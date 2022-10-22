import React from 'react';
import { m } from 'framer-motion';
// material
import { Box, Grid, InputBase, Typography, useTheme } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

function NewsLetter() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingBottom: 10 }}>
      <SectionWrapper>
        <Grid component={MotionViewport} container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Box display="flex" alignItems="center" sx={{ justifyContent: 'center' }}>
                <Box
                  sx={{ width: '90px', height: '90px', marginRight: 2 }}
                  component="img"
                  src="/icons/newsletter.png"
                />
                <Box display="flex" flexDirection="column">
                  <Typography variant="h4">Sign Up For Newsletter</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ marginTop: 0.3 }}>
                    Receive 50% discount on first project
                  </Typography>
                </Box>
              </Box>
            </m.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Box
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: '70%',
                      md: '70%',
                      lg: '80%',
                    },
                  }}
                >
                  <InputBase
                    sx={{
                      paddingTop: 1.6,
                      paddingBottom: 1.6,
                      paddingLeft: 2,
                      backgroundColor: theme.palette.background.neutral,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      width: '100%',
                      height: '60px',
                    }}
                    placeholder="Enter your email"
                  />
                </Box>

                <LoadingButton
                  sx={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    height: '60px',
                  }}
                  variant="contained"
                >
                  Sign Up
                </LoadingButton>
              </Box>
            </m.div>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default NewsLetter;
