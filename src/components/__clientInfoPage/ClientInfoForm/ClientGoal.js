import React from 'react';
// material
import { FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, TextField } from '@mui/material';

// -------------------------------------------------------------------------------

function ClientGoal({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="client-goal">What's your goal ?</FormLabel>
          <RadioGroup
            value={values.goal}
            onChange={(event) => setFieldValue('goal', event.target.value)}
            aria-labelledby="client-goal"
          >
            <FormControlLabel value="extreme-fat-loss" control={<Radio />} label="Extreme fat loss" />
            <FormControlLabel value="fat-loss" control={<Radio />} label="Fat loss" />
            <FormControlLabel value="re-composition" control={<Radio />} label="Re-composition" />
            <FormControlLabel value="clean-bulking" control={<Radio />} label="Clean bulking" />
            <FormControlLabel value="bulking" control={<Radio />} label="Bulking" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ClientGoal;
