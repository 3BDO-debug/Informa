import React from 'react';
// material
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';

// -----------------------------------------------------------------------------------

function WorkoutProgramGoal({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Box py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select your body fat measurement method
          </Typography>
          <RadioGroup
            aria-label="workout-goal"
            value={values.workoutGoal}
            onChange={(event) => setFieldValue('workoutGoal', event.target.value)}
            name="workoutGoal"
          >
            <FormControlLabel value="muscle-building" control={<Radio />} label="Muscle Building" />
            <FormControlLabel value="muscle-strength" control={<Radio />} label="Muscle Strength" />
            <FormControlLabel value="muscle-endurance" control={<Radio />} label="Muscle Endurance" />
            <FormControlLabel value="choose-for-me" control={<Radio />} label="I Don't Know My Goal" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            How Long Have Your Been Training ?
          </Typography>
          <RadioGroup
            aria-label="workout-level"
            value={values.workoutLevel}
            onChange={(event) => setFieldValue('workoutLevel', event.target.value)}
            name="workoutLevel"
          >
            <FormControlLabel value="starter-level" control={<Radio />} label="0 - 6 Months" />
            <FormControlLabel value="beginner-level" control={<Radio />} label="6 Months - 1 Year " />
            <FormControlLabel value="intermediate-level" control={<Radio />} label="1 Year - 1.5 Year" />
            <FormControlLabel value="advanced-level" control={<Radio />} label="+ 1.5 Year" />
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkoutProgramGoal;
