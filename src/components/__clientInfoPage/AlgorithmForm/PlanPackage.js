import React from 'react';
// material
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';

// -----------------------------------------------------------

function PlanPackage({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Box px={3} py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel id="plan-package">Choose Your Plan Package</FormLabel>
            <RadioGroup
              value={values.planPackage}
              onChange={(event) => setFieldValue('planPackage', event.target.value)}
              aria-aria-labelledby="plan-package"
            >
              <FormControlLabel value="nutrition-workout" label="Nutrition & Workout Plan" control={<Radio />} />
              <FormControlLabel value="nutrition" label="Nutrition" control={<Radio />} />
              <FormControlLabel value="workout" label="Workout" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlanPackage;
