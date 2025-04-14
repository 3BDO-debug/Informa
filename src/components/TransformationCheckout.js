import React from 'react';
// @Mui
import { Box } from '@mui/material';
import Slider from 'react-slick';

function TransformationCheckout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const images = [
    { img: '2.png' },
    { img: '3.png' },
    { img: '4.png' },
    { img: '5.png' },
    { img: '6.png' },
    { img: '7.png' },
    { img: '8.png' },
    { img: '9.png' },
    { img: '10.png' },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: 300 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: 250, md: 400 } }} component="img" src="/images/checkout-transformations/1.png" />
      </Box>
      <Box sx={{ mt: { xs: -3, md: -4 } }}>
        <Slider {...settings}>
          {images.map((_, index) => (
            <Box sx={{ marginX: 0 }}>
              <Box
                sx={{
                  height: {
                    xs: 110,
                    md: 310,
                  },
                  aspectRatio: '1/1',
                  width: '100%',
                  objectFit: 'contain',
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
