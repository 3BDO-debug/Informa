import React from 'react';
// @Mui
import { Box, Grid } from '@mui/material';
import Slider from 'react-slick';

// ------------------------------------------------------------------

function TransformationCheckout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Box>
      <Slider {...settings}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Box>
            <Box
              sx={{
                height: {
                  xs: 300,
                  md: 400,
                },
                aspectRatio: '1/1',
                width: '100%',
                objectFit: 'cover',
              }}
              component="img"
              src={`/images/top-picks-transformations/${index + 1}.jpg`}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default TransformationCheckout;
