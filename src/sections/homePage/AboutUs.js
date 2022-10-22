import React, { useState } from 'react';
// material
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import palette from 'src/theme/palette';

// ---------------------------------------------------------------

function AboutUs() {
  const theme = useTheme();

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{ backgroundColor: palette.dark.background.default, mt: 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container columnSpacing={20}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    textAlign: {
                      xs: 'center',
                      md: 'start',
                    },
                  }}
                  variant="h2"
                  color="common.white"
                >
                  Story of success
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  justifyContent: {
                    xs: 'center',
                    md: 'flex-start',
                  },
                }}
              >
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ mb: { xs: 2, md: 0 }, mt: { xs: 4, md: 0 } }}>
              <Box
                sx={{
                  transform: hovered ? 'scale(1.3)' : 'scale(1)',
                  transition: theme.transitions.create(['transform'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: '0.9s',
                  }),
                }}
                component="img"
                width={"100%"}
                src="/images/about-section-1.jpeg"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Button sx={{ mt: 4 }} variant="outlined">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
