import React from 'react';
// lottie-react
import Lottie from 'lottie-react';
// mui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
// recoil
import { useRecoilState, useSetRecoilState } from 'recoil';
// atoms
import secretCodePopUpAtom from 'src/recoil/atoms/secretCodePopUp';
import alertAtom from 'src/recoil/atoms/alertAtom';
// components
import Iconify from '../Iconify';
// animations
import success from '../../assets/animations/success.json';

function SecretCodePopUp() {
  const [secretCodePopUp, triggerSecretCodePopUp] = useRecoilState(secretCodePopUpAtom);

  const triggerAlert = useSetRecoilState(alertAtom);

  const handleCopy = () => {
    navigator.clipboard.writeText(secretCodePopUp.code);
    triggerAlert({ triggered: true, type: 'success', message: 'Copied to Clipboard' });
  };

  return (
    <Dialog open={secretCodePopUp.triggered} onClose={() => triggerSecretCodePopUp({ triggered: false })} fullWidth>
      <DialogTitle variant="h3">Payment Successfull !</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Lottie animationData={success} style={{ width: 300 }} />
        </Box>
        <Typography variant="h6">Here is your secret key</Typography>
        <Stack
          direction="row"
          sx={{ mt: 1, bgcolor: 'grey.300', borderRadius: 1, px: 1, width: 'fit-content', alignItems: 'center' }}
        >
          <Typography color="primary.main" variant="h6">
            {secretCodePopUp.code}
          </Typography>
          <Tooltip title="Copy">
            <IconButton onClick={handleCopy}>
              <Iconify icon="solar:copy-broken" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1 }}>
          This key is only shown once, save it as you will need it in the sign up proccess.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          endIcon={<Iconify icon="iconamoon:send-light" />}
          onClick={() => (window.location.href = 'https://informa-portal.vercel.app/auth/signup')}
        >
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SecretCodePopUp;
