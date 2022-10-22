import React, { useState } from 'react';
// material
import { Box, Button, Card, Grid, Typography, useTheme } from '@mui/material';
import Iconify from 'src/components/Iconify';
// theme
import palette from 'src/theme/palette';

// ---------------------------------------------------------------------------------------------------------------

const ServiceCard = ({ title, description, cover, icon }) => {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{ cursor: 'pointer', height: '300px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        sx={{
          borderRadius: '0px',
          backgroundImage: `url(${cover})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Iconify color="white" width={50} height={50} icon={icon} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography color="common.white" sx={{ textTransform: 'capitalize', textAlign: 'center' }} variant="h4">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ textAlign: 'center', margin: '0 auto', width: '70%' }}
              color={palette.dark.text.primary}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined">Learn more</Button>
            </Box>
          </Grid>
        </Grid>

        {/*  <Box
          component="img"
          src={cover}
          sx={{
            filter: 'brightness(40%)',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: '0.9s',
            }),
          }}
        /> */}
      </Card>
    </Box>
  );
};

// ---------------------------------------------------------------------------------------------------------------

function Services() {
  return (
    <Box sx={{ paddingTop: 10 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <ServiceCard
            title="Workout Plans"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            cover="/images/services-workout.jpeg"
            icon="ion:barbell"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            title="Nutrition Plans"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            cover="/images/services-supplements.jpeg"
            icon="game-icons:meal"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            title="Progress Tracking"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            cover="/images/services-progress.jpeg"
            icon="mdi:progress-check"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
