import React from 'react';
import { useRecoilState } from 'recoil';
// material
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// atoms
import registerNowPopUpAtom from 'src/recoil/registerNowPopUpAtom';
import { LoadingButton } from '@mui/lab';

// ---------------------------------------------------------------------------------------

function RegisterNowPopUp() {
  const [registerNowPopUp, triggerRegisterNowPopUp] = useRecoilState(registerNowPopUpAtom);

  const handlePopUpClose = () => {
    triggerRegisterNowPopUp(false);
  };

  return (
    <Dialog open={registerNowPopUp} onClose={handlePopUpClose} fullWidth>
      <DialogTitle>Register Now</DialogTitle>
      <DialogContent>
        <Box paddingTop={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Full name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Whatsapp number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Country of residence" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Age" type="number" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Gender" select fullWidth>
                <MenuItem>Male</MenuItem>
                <MenuItem>Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Weight" type="number" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Height" type="number" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField defaultValue="Workout & Nutrition plan" label="Plan type" fullWidth select>
                <MenuItem value="Workout Plan">Workout plan</MenuItem>
                <MenuItem value="Workout & Nutrition plan" selected>
                  Workout & Nutrition plan
                </MenuItem>
                <MenuItem value="Nutrition plan">Nutrition plan</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField defaultValue="3 Months" label="Plan duration" fullWidth select>
                <MenuItem value="1 Month">1 Month</MenuItem>
                <MenuItem value="3 Months" selected>
                  3 Months
                </MenuItem>
                <MenuItem value="6 Months">6 Months</MenuItem>
                <MenuItem value="12 Months">12 Months</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField defaultValue="Golden Package" label="Choose your package" select fullWidth>
                <MenuItem value="Silver Package">Silver Package</MenuItem>
                <MenuItem value="Golden Package" selected>
                  Golden Package
                </MenuItem>
                <MenuItem value="Mega Package">Mega Package</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
              <Typography variant="subtitle1">Total Price : 150$</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button sx={{ mr: 1}} onClick={handlePopUpClose} variant="outlined" color="error">
                Cancel
              </Button>
              <LoadingButton endIcon={<SendIcon />} variant="contained">
                Submit
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default RegisterNowPopUp;
