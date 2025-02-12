import React from 'react';
// @Mui
import { Box, Grid } from '@mui/material';

// ------------------------------------------------------------------

function TransformationCheckout() {
  return (
    <Box>
      <Grid container>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={6}>
            <Box
              sx={{
                height: {
                  xs: 150,
                  md: 250,
                },
                aspectRatio: '1/1',
                width: '100%',
                objectFit: 'cover',
              }}
              component="img"
              src={`/images/transformations/${index + 1}.png`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TransformationCheckout;
