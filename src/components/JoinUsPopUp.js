import React from 'react';
import { useRecoilState } from 'recoil';
// recoil
import joinUsPopUpAtom from 'src/recoil/joinUsPopUpAtom';
// material
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

// -------------------------------------------------------------------------------

function JoinUsPopUp() {
  const [joinUsPopUp, triggerJoinUsPopUp] = useRecoilState(joinUsPopUpAtom);

  const onPopUpClose = () => {
    triggerJoinUsPopUp(false);
  };

  return (
    <Dialog open={joinUsPopUp} onClose={onPopUpClose} fullWidth>
      <DialogTitle>Join Informa now</DialogTitle>
      <DialogContent>
        <Box pt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Full name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone number" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" fullWidth multiline rows={4} />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onPopUpClose} variant="outlined" color="error">
          Cancel
        </Button>
        <LoadingButton variant="contained" endIcon={<SendIcon />}>
          Join now
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

export default JoinUsPopUp;
