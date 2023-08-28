import React from 'react';
// material
import { Box, Grid, RadioGroup, FormControlLabel, Radio, TextField, Typography } from '@mui/material';

// -------------------------------------------------------------------------

function MealsPerDay({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Box py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Number of meals per day
          </Typography>
          <RadioGroup
            aria-label="mealsPerDay"
            value={values.mealsPerDay}
            onChange={(event) => setFieldValue('mealsPerDay', event.target.value)}
            name="mealsPerDay"
          >
            <FormControlLabel value="2" control={<Radio />} label="2 Meals + Snacks" />
            <FormControlLabel value="3" control={<Radio />} label="3 Meals + Snacks" />
            <FormControlLabel value="4" control={<Radio />} label="4 Meals + Snacks" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Do you have lactose intolerance?
          </Typography>
          <RadioGroup
            aria-label="lactoseIntolerance"
            value={values.lactoseIntolerance}
            onChange={(event) => setFieldValue('lactoseIntolerance', event.target.value)}
            name="lactoseIntolerance"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MealsPerDay;
