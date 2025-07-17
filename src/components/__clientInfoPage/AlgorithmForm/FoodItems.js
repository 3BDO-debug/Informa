import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
import remove from 'src/assets/animations/remove-food-item.json';
import deleted from 'src/assets/animations/food-item-deleted.json';
//
import Iconify from 'src/components/Iconify';

// ---------------------------------------------------------------------------------------------------------------

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const FoodItemCard = () => {
  const [isExcluded, setIsExcluded] = useState(false);

  return (
    <Box py={3}>
      <Card sx={{ width: 250 }}>
        {isExcluded ? (
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Lottie animationData={deleted} />
            </Box>
            <Typography variant="h5" align="center">
              Food Item Excluded
            </Typography>
            <Divider sx={{ mt: '20%' }} />
            <Button onClick={() => setIsExcluded(!isExcluded)} size="large">
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
              <Avatar src="https://picsum.photos/200" sx={{ width: 140, height: 140 }} />
            </Box>
            <Box sx={{ mt: 6, px: 2 }}>
              <Typography color="primary" variant="caption">
                Protein Source
              </Typography>
              <Typography variant="h5">Chicken Breast</Typography>
            </Box>
            <Divider sx={{ mt: '20%' }} />
            <Button
              onClick={() => setIsExcluded(!isExcluded)}
              startIcon={<Iconify icon="line-md:remove" />}
              size="large"
              color="error"
            >
              Exclude
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

// ---------------------------------------------------------------------------------------------------------------

function FoodItems({ formik }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 3; // Change according to the number of cards

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
        {/* Food items categories */}
        <Grid item xs={12}>
          <Typography variant="h6">Exclude Food You Dont like</Typography>
        </Grid>

        {/* Food items categories */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mt: 1 }}>
            <Box sx={{ mr: 1, mt: 1 }}>
              <Chip
                label="Carb Source"
                icon={<Iconify sx={{ width: 25, height: 25 }} icon="mingcute:bread-line" />}
                clickable
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box sx={{ mr: 1, mt: 1 }}>
              <Chip
                label="Protein Source"
                icon={<Iconify sx={{ width: 25, height: 25 }} icon="tabler:meat" />}
                clickable
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box sx={{ mr: 1, mt: 1 }}>
              <Chip
                label="Fats Source"
                icon={<Iconify sx={{ width: 25, height: 25 }} icon="fluent-emoji-high-contrast:butter" />}
                clickable
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box sx={{ mr: 1, mt: 1 }}>
              <Chip
                label="Fruits"
                icon={<Iconify sx={{ width: 25, height: 25 }} icon="carbon:fruit-bowl" />}
                clickable
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box sx={{ mr: 1, mt: 1 }}>
              <Chip
                label="Vegetables"
                icon={<Iconify sx={{ width: 25, height: 25 }} icon="lucide:salad" />}
                clickable
                variant="outlined"
                color="primary"
              />
            </Box>
          </Box>
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
          <Box>
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
                <FoodItemCard />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FoodItemCard />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FoodItemCard />
              </Box>
            </SwipeableViews>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FoodItems;
