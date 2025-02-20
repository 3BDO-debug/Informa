import React from 'react';
// @Mui
import { Box } from '@mui/material';
import Slider from 'react-slick';

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

  const images = [{ img: '2.png' }, { img: '3.png' }, { img: '4.png' }];

  return (
    <Box sx={{ position: 'relative', minHeight: 300 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: 200, md: 400 } }} component="img" src="/images/checkout-transformations/1.png" />
      </Box>
      <Box sx={{ mt: { xs: -19, md: -27 } }}>
        <Slider {...settings}>
          {images.map((_, index) => (
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
                src={`/images/checkout-transformations/${_.img}`}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default TransformationCheckout;
