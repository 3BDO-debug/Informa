import React, { useState } from 'react';
// mui
import {
  Box,
  Button,
  Card,
  CardContent,
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
// recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// atoms
import chechoutPopUpAtom from 'src/recoil/atoms/checkoutPopUpAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
// components
import Iconify from '../Iconify';
import StripeCheckout from './StripeCheckout';
import useLocales from 'src/hooks/useLocales';
import { TimelineConnector } from '@mui/lab';
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';

function PaymentPopUp() {
  const [stripeMethode, setStripeMethode] = useState(true);
  const [paymentPopUp, triggerPaymentPopUp] = useRecoilState(chechoutPopUpAtom);

  const region = useRecoilValue(userIpRegionAtom);

  const { translate, currentLang } = useLocales();

  const handlePopUpClose = () => {
    triggerPaymentPopUp(false);
  };

  const triggerRegisterNowPopUp = useSetRecoilState(registerNowPopUpAtom);

  return (
    <Dialog open={paymentPopUp} onClose={handlePopUpClose} fullWidth>
      <DialogContent>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Button
            startIcon={<Iconify icon="ic:round-arrow-back-ios-new" />}
            onClick={() => {
              triggerRegisterNowPopUp(true);
              triggerPaymentPopUp(false);
            }}
          >
            Back
          </Button> */}
          <Typography variant="h3" sx={{ display: 'flex', justifyContent: 'center' }}>
            {currentLang.value === 'ar' ? 'إتمام الدفع' : 'Checkout'}
          </Typography>
          <Tooltip title="Contact Sales">
            <IconButton
              onClick={() => {
                window.open('https://wa.link/jqec0m');
              }}
            >
              <Iconify icon="logos:whatsapp-icon" sx={{ fontSize: 30 }} />
            </IconButton>
          </Tooltip>
        </Stack>
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
                  window.open('https://wa.link/jqec0m');
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
        {region === 'EG' && stripeMethode && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ textDecoration: 'underline', color: 'green' }} onClick={() => setStripeMethode(false)}>
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
      </DialogContent>
    </Dialog>
  );
}

export default PaymentPopUp;
