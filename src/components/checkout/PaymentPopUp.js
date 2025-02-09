import React, { useState } from 'react';
// mui
import { Box, Button, Card, CardContent, colors, Dialog, DialogContent, Stack, Typography } from '@mui/material';
// recoil
import { useRecoilState, useRecoilValue } from 'recoil';
// atoms
import chechoutPopUpAtom from 'src/recoil/atoms/checkoutPopUpAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
// components
import Iconify from '../Iconify';
import StripeCheckout from './StripeCheckout';
import useLocales from 'src/hooks/useLocales';

function PaymentPopUp() {
  const [stripeMethode, setStripeMethode] = useState(true);
  const [paymentPopUp, triggerPaymentPopUp] = useRecoilState(chechoutPopUpAtom);

  const region = useRecoilValue(userIpRegionAtom);

  const { translate, currentLang } = useLocales();

  const handlePopUpClose = () => {
    triggerPaymentPopUp(false);
  };

  return (
    <Dialog open={paymentPopUp} onClose={handlePopUpClose} fullWidth>
      <DialogContent>
        <Typography variant="h3" sx={{ display: 'flex', justifyContent: 'center' }}>
          {currentLang.value === 'ar' ? 'إتمام الدفع' : 'Checkout'}
        </Typography>
        {region === 'EG' && stripeMethode && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ textDecoration: 'underline' }} onClick={() => setStripeMethode(false)}>
              {currentLang.value === 'ar' ? 'طرق الدفع الأخرى' : 'other payment methods'}
            </Button>
          </Box>
        )}
        {!stripeMethode && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ textDecoration: 'underline' }} onClick={() => setStripeMethode(true)}>
              {currentLang.value === 'ar' ? 'الدفع باستخدام البطاقة' : 'Pay With Card'}
            </Button>
          </Box>
        )}
        {!stripeMethode && (
          <Box>
            <Typography variant="h5" sx={{ py: 1, color: 'primary.main' }}>
              {currentLang.value === 'ar' ? 'اختر الطريقة التي تناسب.' : 'How Do You Wish To Procced'}
            </Typography>
            <Stack direction="row" gap={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  cursor: 'pointer',
                  p: 1,
                  borderRadius: 3,
                }}
                onClick={() => {
                  window.open('https://wa.link/cfn3ss');
                }}
              >
                <Card sx={{ boxShadow: 20 }}>
                  <CardContent>
                    <Iconify icon="arcticons:instapay" sx={{ fontSize: 100 }} />
                  </CardContent>
                </Card>
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  {currentLang.value === 'ar' ? 'إنستاباي' : 'Instapay'}
                </Typography>
              </Box>
              <Box
                onClick={() => {
                  window.open('https://wa.link/cfn3ss');
                }}
                sx={{
                  cursor: 'pointer',
                  p: 1,

                  borderRadius: 3,
                }}
              >
                <Card sx={{ boxShadow: 20, display: 'flex', justifyContent: 'center' }}>
                  <CardContent>
                    <Iconify icon="simple-icons:vodafone" sx={{ fontSize: 100 }} color="red" />
                  </CardContent>
                </Card>
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  {currentLang.value === 'ar' ? 'فودافون كاش' : 'Vodafone Cash'}
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
        <Box sx={{ mt: 5 }}>{stripeMethode && <StripeCheckout />}</Box>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentPopUp;
