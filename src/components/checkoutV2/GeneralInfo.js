import React from 'react';
// @Mui
import { Box, ButtonBase, Stack, TextField, Typography } from '@mui/material';

// ---------------------------------------------------------------------

function GeneralInfo({ formik }) {
  return (
    <Box>
      <Stack gap={3}>
        <TextField label="Fullname" fullWidth />
        <TextField label="Phone Number" fullWidth />
        <ButtonBase sx={{ bgcolor: 'text.primary', color: 'background.paper', borderRadius: 1, py: 2, mt: 6 }}>
          <Typography variant="subtitle1">Start My Journey</Typography>
        </ButtonBase>
      </Stack>
    </Box>
  );
}

export default GeneralInfo;
