import React from 'react';
// @Mui
import { Box } from '@mui/material';

function TransformationCheckout() {
  return (
    <Box sx={{ position: 'relative', minHeight: 300 }}>
      <Box sx={{ position: 'absolute', top: 0 }} component="img" src="/images/checkout-transformations/1.png" />
      <Box
        component="img"
        src="/images/checkout-transformations/2.png"
        sx={{ transform: 'rotate(1deg)', position: 'absolute' }}
      />
    </Box>
  );
}

export default TransformationCheckout;
