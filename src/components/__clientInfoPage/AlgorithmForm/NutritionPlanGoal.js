import React from 'react';
// material
import { Box, Grid, RadioGroup, FormControlLabel, Radio, TextField, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// --------------------------------------------------------------------------------------

function NutritionPlanGoal({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Box px={3} py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select your plan goal
          </Typography>
          <RadioGroup
            aria-label="planGoal"
            value={values.nutritionPlanGoal}
            onChange={(event) => setFieldValue('nutritionPlanGoal', event.target.value)}
            name="planGoal"
          >
            <FormControlLabel
              value="extreme-fat-loss"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Extreme Fat Loss</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <FormControlLabel
              value="fat-loss"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Fat Loss</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <FormControlLabel
              value="re-composition"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Re-Composition</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <FormControlLabel
              value="clean-bulking"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Clean Bulking</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <FormControlLabel
              value="bulking"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Bulking</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <FormControlLabel
              value="re-composition"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Determine For Me</Typography>
                  <IconButton size="medium" sx={{ ml: 1 }} aria-label="more info">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              }
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="goalDescription"
            value={values.nutritionPlanGoalDescription}
            onChange={(event) => setFieldValue('nutritionPlanGoalDescription', event.target.value)}
            label="Describe your goal in more detail"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NutritionPlanGoal;
