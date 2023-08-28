import React, { useState } from 'react';
import Image from 'next/image';
// material
import { Box, Grid, RadioGroup, FormControlLabel, Radio, TextField, Typography } from '@mui/material';
// assets
import bodyFatRefImage from 'src/assets/body-fat-ref.jpg';

// ----------------------------------------------------------------------------

function BodyFatQuestion({ formik }) {
  const { values, setFieldValue } = formik;

  const handleRadioChange = (event) => {
    setFieldValue('bodyFatMeasurementMethod', event.target.value);
  };

  return (
    <Box px={3} py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select your body fat measurement method
          </Typography>
          <RadioGroup
            aria-label="gender"
            name="bodyFatMeasurementMethod"
            value={values.bodyFatMeasurementMethod}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="inBody" control={<Radio />} label="In-Body" />
            <FormControlLabel value="anotherDevice" control={<Radio />} label="Another Device" />
            <FormControlLabel value="fromImage" control={<Radio />} label="Show Me Reference Image" />
          </RadioGroup>

          {values.bodyFatMeasurementMethod === 'fromImage' && (
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Please approximate your body fat percentage based on the reference image.
              </Typography>
              {/* Insert your reference image here */}
              <Image src={bodyFatRefImage} alt="body fat reference" />
            </div>
          )}
          {Boolean(values.bodyFatMeasurementMethod) && (
            <TextField
              value={values.bodyFat}
              onChange={(event) => setFieldValue('bodyFat', event.target.value)}
              fullWidth
              margin="normal"
              name="bodyFat"
              label="Enter your body fat percentage"
              type="number"
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyFatQuestion;
