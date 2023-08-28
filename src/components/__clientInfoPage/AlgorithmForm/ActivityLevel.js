import React from 'react';
// material
import { Box, Grid, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import couchIcon from '@iconify/icons-mdi/couch';
import walkIcon from '@iconify/icons-mdi/walk';
import runIcon from '@iconify/icons-mdi/run';
import weightLifter from '@iconify/icons-mdi/dumbbell';
import bikeFast from '@iconify/icons-mdi/bike-fast';
//
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

function RadioLabel({ label, icon, ...props }) {
  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Typography variant="subtitle1" sx={{ mr: 2 }}>
        {label}
      </Typography>
      <Iconify sx={{ color: 'primary.main', width: 24, height: 24 }} icon={icon} />
    </Box>
  );
}

function ActivityLevel({ formik }) {
  const trainingDaysOptions = ['0-days', '1-2-days', '3-days', '4-days', '5-days', '6-days'];

  const { values, setFieldValue } = formik;

  return (
    <Box px={3} py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select your activity level
          </Typography>
          <RadioGroup
            aria-label="activityLevel"
            value={values.activityLevel}
            onChange={(event) => setFieldValue('activityLevel', event.target.value)}
            name="activityLevel"
          >
            <FormControlLabel
              value="sedentary"
              control={<Radio />}
              label={<RadioLabel label="Sedentary" icon={couchIcon} />}
            />
            <FormControlLabel value="light" control={<Radio />} label={<RadioLabel label="Light" icon={walkIcon} />} />
            <FormControlLabel
              value="moderate"
              control={<Radio />}
              label={<RadioLabel label="Moderate" icon={runIcon} />}
            />
            <FormControlLabel
              value="active"
              control={<Radio />}
              label={<RadioLabel label="Active" icon={weightLifter} />}
            />
            <FormControlLabel
              value="very-active"
              control={<Radio />}
              label={<RadioLabel label="Very Active" icon={bikeFast} />}
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select your training days
          </Typography>
          <RadioGroup
            aria-label="trainingDays"
            value={values.trainingDays}
            onChange={(event) => setFieldValue('trainingDays', event.target.value)}
            name="trainingDays"
          >
            {trainingDaysOptions.map((option, index) => (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActivityLevel;
