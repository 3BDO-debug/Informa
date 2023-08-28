import { Box, Grid, RadioGroup, FormControlLabel, Radio, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function SupplementsQuestion({ formik }) {
  const { values, setFieldValue } = formik;

  const handleRadioChange = (event) => {
    setFieldValue('supplementsAvailabilty', event.target.value);
  };

  return (
    <Box py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Do you have any kind of supplements?
          </Typography>
          <RadioGroup
            aria-label="supplements"
            name="supplements"
            value={values.supplementsAvailabilty}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="i-will-buy" control={<Radio />} label="I am going to buy" />
          </RadioGroup>
        </Grid>
        {values.supplementsAvailabilty === 'yes' && (
          <Grid item xs={12}>
            <TextField
              value={values.supplementType}
              onChange={(event) => setFieldValue('supplementType', event.target.value)}
              fullWidth
              margin="normal"
              name="supplementType"
              label="Write down the supplement type"
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default SupplementsQuestion;
