import React, { useState } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import SwipeableViews from 'react-swipeable-views';
// material
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// animations
import selected from 'src/assets/animations/equipment-selected.json';
//
import Iconify from 'src/components/Iconify';

// ---------------------------------------------------------------------------------------------------

const EquipmentCard = ({ slideNext }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Box py={3}>
      <Card sx={{ width: 250 }}>
        {isSelected ? (
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Lottie animationData={selected} />
            </Box>
            <Typography variant="h5" align="center">
              Equipment Selected
            </Typography>
            <Divider sx={{ mt: '20%' }} />
            <Button onClick={() => setIsSelected(!isSelected)} size="large">
              Undo
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              pt: 3,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src="https://lh6.googleusercontent.com/s4b-JF_B4Cp0Xn4HPwGAQNxrOqR7PLEjQ1mtGyrmZ7GZSKEMTbBaABOgWRBmjXBaD3BjN5CS-iAVqF8kP197B6la0oaXeu60d89bxy2FqIFI0KMnYnSkP6wwig0IdQ5R9w=w260"
                sx={{ width: 140, height: 140 }}
              />
            </Box>
            <Box sx={{ mt: 6, px: 2 }}>
              <Typography color="primary" variant="caption">
                Cardio
              </Typography>
              <Typography variant="h5">Treadmil</Typography>
            </Box>
            <Divider sx={{ mt: '20%' }} />
            <Button
              onClick={() => {
                setIsSelected(!isSelected);
                slideNext();
              }}
              startIcon={<Iconify icon="carbon:checkmark" />}
              size="large"
              color="success"
            >
              Select
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

// ---------------------------------------------------------------------------------------------------

function AvailableCardioEquipments({ formik }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 3; // Change according to the number of cards

  const { values, setFieldValue } = formik;

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  };

  const handleBack = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box py={2}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Choose Available Cardio Equipments</Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ float: 'right' }}>
            <IconButton onClick={handleBack} disabled={currentSlide === 0}>
              <Iconify sx={{ transform: 'rotate(180deg)' }} icon="ic:round-navigate-next" />
            </IconButton>
            <IconButton onClick={handleNext} disabled={currentSlide === maxSlides - 1}>
              <Iconify icon="ic:round-navigate-next" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ overflowX: 'hidden' }}>
            <SwipeableViews
              style={{
                width: isMobile ? '100%' : 560,
                paddingLeft: isMobile ? 0 : 120,
                paddingRight: isMobile ? 0 : 120,
              }}
              index={currentSlide}
              onChangeIndex={setCurrentSlide}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <EquipmentCard slideNext={handleNext} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <EquipmentCard slideNext={handleNext} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <EquipmentCard slideNext={handleNext} />
              </Box>
            </SwipeableViews>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AvailableCardioEquipments;
