import React, { useRef } from 'react';
import Slider from 'react-slick';
// material
import { Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
// components

// ------------------------------------------------------------------------------------------------------

const clientReviews = [
  { src: '/images/reviews/1.jpeg', category: 'web' },
  { src: '/images/reviews/2.jpeg', category: 'web' },
  { src: '/images/reviews/4.jpeg', category: 'whatsapp' },
  { src: '/images/reviews/5.jpeg', category: 'web' },
  { src: '/images/reviews/6.jpeg', category: 'whatsapp' },
  { src: '/images/reviews/7.jpeg', category: 'whatsapp' },
  { src: '/images/reviews/8.jpeg', category: 'whatsapp' },
  { src: '/images/reviews/9.jpeg', category: 'whatsapp' },
  { src: '/images/reviews/10.jpeg', category: 'web' },
];

// ------------------------------------------------------------------------------------------------------

const ReviewCard = ({ src, category }) => {
  return (
    <Card sx={{ mr: 4, ml: 4, mb: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            width={45}
            sx={{ ml: 2, mt: 2 }}
            component="img"
            src={category === 'whatsapp' ? '/icons/whatsapp.png' : '/icons/web.png'}
          />
        </Grid>
        <Grid item xs={12}>
          <Box component="img" src={src} />
        </Grid>
      </Grid>
    </Card>
  );
};

// ------------------------------------------------------------------------------------------------------

function Reviews() {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2700,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.neutral }}>
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="overline" sx={{ display: 'flex', justifyContent: 'center' }}>
              Reviews
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
              People are happy with us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ paddingTop: 7 }}>
              <Slider ref={carouselRef} {...settings}>
                {clientReviews.map((clientReview, index) => (
                  <ReviewCard key={index} src={clientReview.src} category={clientReview.category} />
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Reviews;
