import React from 'react';
// material
import { Grid, MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

function ActivityLevel({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          value={values.trainingVolume}
          onChange={(event) => setFieldValue('trainingVolume', event.target.value)}
          label="How many days do you train ?"
          select
          fullWidth
        >
          <MenuItem value="0-days">0 Days</MenuItem>
          <MenuItem value="1-2-days">1-2 Days</MenuItem>
          <MenuItem value="3-days">3 Days</MenuItem>
          <MenuItem value="4-days">4 Days</MenuItem>
          <MenuItem value="5-days">5 Days</MenuItem>
          <MenuItem value="6-days">6 Days</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="What is your activity level per day ?"
          value={values.activityPerDay}
          onChange={(event) => setFieldValue('activityPerDay', event.target.value)}
          select
          fullWidth
        >
          <MenuItem value="sedentary">Sedentary</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="moderate">Moderate</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="very-active">Very Active</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}

export default ActivityLevel;
