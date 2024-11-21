import React, { useState } from 'react';
// mui
import { Box, Card, CardContent, Dialog, DialogContent, Stack, Typography } from '@mui/material';
// recoil
import { useRecoilState } from 'recoil';
// atoms
import chechoutPopUpAtom from 'src/recoil/atoms/checkoutPopUpAtom';
// components
import Iconify from '../Iconify';
import StripeCheckout from './StripeCheckout';

function PaymentPopUp() {
  const [stripeMethode, setStripeMethode] = useState(false);
  const [vodafone, setVodafone] = useState(false);
  const [paymentPopUp, triggerPaymentPopUp] = useRecoilState(chechoutPopUpAtom);

  const handlePopUpClose = () => {
    triggerPaymentPopUp(false);
  };

  return (
    <Dialog open={paymentPopUp} onClose={handlePopUpClose} fullWidth>
      <DialogContent>
        <Typography variant="h3" sx={{ display: 'flex', justifyContent: 'center' }}>
          Checkout
        </Typography>
        <Typography variant="h5" sx={{ py: 1, color: 'primary.main' }}>
          How Do You Wish To Procced
        </Typography>
        <Stack direction="row" gap={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              cursor: 'pointer',
              p: 1,
              border: 2,
              borderRadius: 3,
              borderColor: 'primary.main',
              borderStyle: stripeMethode ? 'dotted' : 'none',
            }}
            onClick={() => {
              setStripeMethode(true);
              setVodafone(false);
            }}
          >
            <Card sx={{ boxShadow: 20 }}>
              <CardContent>
                <Iconify icon="logos:stripe" sx={{ fontSize: 100 }} />
              </CardContent>
            </Card>
            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              Stripe
            </Typography>
          </Box>
          <Box
            onClick={() => {
              window.open('https://wa.link/cfn3ss');
              setStripeMethode(false);
              setVodafone(true);
            }}
            sx={{
              cursor: 'pointer',
              p: 1,
              border: 2,
              borderRadius: 3,
              borderColor: 'primary.main',
              borderStyle: vodafone ? 'dotted' : 'none',
            }}
          >
            <Card sx={{ boxShadow: 20, display: 'flex', justifyContent: 'center' }}>
              <CardContent>
                <Iconify icon="simple-icons:vodafone" sx={{ fontSize: 100 }} color="red" />
              </CardContent>
            </Card>
            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              Vodafone Cash
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: 5 }}>{stripeMethode && <StripeCheckout />}</Box>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentPopUp;
