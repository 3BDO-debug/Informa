import React from 'react';
// material
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';

// -------------------------------------------------------------------------------------------/

function WeakestMuscleGroups({ formik }) {
  const { values, setFieldValue } = formik;

  const muscleGroupList = ['Chest', 'Back', 'Legs', 'ABS', 'Biceps', 'Triceps', 'Shoulders', 'Calves'];

  return (
    <Box py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Choose Your Weakest Muscle Groups</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormGroup>
              {muscleGroupList.map((group, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={values.weakestMuscleGroups.includes(group)}
                      onChange={() => {
                        if (values.weakestMuscleGroups.includes(group)) {
                          setFieldValue(
                            'weakestMuscleGroups',
                            values.weakestMuscleGroups.filter((item) => item !== group)
                          );
                        } else {
                          setFieldValue('weakestMuscleGroups', [...values.weakestMuscleGroups, group]);
                        }
                      }}
                    />
                  }
                  label={group}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeakestMuscleGroups;
