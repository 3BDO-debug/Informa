'use client';
import React, { useCallback, useEffect, useState } from 'react';
// next/router
import { useRouter } from 'next/router';
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
// __apis__
import {
  fetchRequestInfo,
  clientSubscriptionIdRequest,
  registerClientRequest,
  proceedTrainingRequest,
} from 'src/__apis__/personalTraining';
// recoil
import { useRecoilState, useSetRecoilState } from 'recoil';
// atoms
import secretCodePopUpAtom from 'src/recoil/atoms/secretCodePopUp';
import alertAtom from 'src/recoil/atoms/alertAtom';
// components
import Iconify from '../Iconify';
// animations
import success from '../../assets/animations/success.json';
import useLocales from 'src/hooks/useLocales';

function SecretCodePopUp() {
  const triggerAlert = useSetRecoilState(alertAtom);
  const [secretCodePopUp, triggerSecretCodePopUp] = useRecoilState(secretCodePopUpAtom);

  const [requestInfo, setRequestInfo] = useState(null);

  const { translate, currentLang } = useLocales();

  const { query } = useRouter();

  const getRequestInfo = useCallback(async () => {
    await fetchRequestInfo(query.phone)
      .then((response) => {
        setRequestInfo(response);
      })
      .catch((error) => {
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happend, contact support' });
      });
  }, [query.phone]);

  useEffect(() => {
    if (query.phone) {
      triggerSecretCodePopUp(true);
      getRequestInfo();
    }
  }, [query.phone]);

  const handleCopy = () => {
    navigator.clipboard.writeText(query.secret_code);
    triggerAlert({ triggered: true, type: 'success', message: 'Copied to Clipboard' });
  };

  useEffect(() => {
    if (requestInfo?.id) {
      proceedTrainingRequestStatus();
    }
  }, [requestInfo?.id]);

  //--------------------------------------------------------------------

  const [subscriptionId, setSubscriptionId] = useState(null);
  const [signUpCode, setSignUpCode] = useState(null);

  const proceedTrainingRequestStatus = useCallback(async () => {
    await proceedTrainingRequest({ requestId: requestInfo?.id })
      .then((response) => {
        if (response.message) {
          triggerAlert({
            triggered: true,
            type: 'warning',
            message: 'Already Procceded',
          });
          triggerSecretCodePopUp(false);
        } else {
          createSubscriptionId();
        }
      })
      .catch((error) =>
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' })
      );
  }, [requestInfo?.id]);

  const firstName = requestInfo?.fullname?.split(' ')[0] || ' ';
  const lastName =
    requestInfo?.fullname?.includes(' ') && requestInfo?.fullname?.split(' ')[1]
      ? requestInfo?.fullname?.split(' ')[1]
      : ' ';

  const createSubscriptionId = useCallback(async () => {
    await clientSubscriptionIdRequest(
      requestInfo?.followup_package,
      requestInfo?.plan_program,
      requestInfo?.plan_duration,
      firstName,
      lastName
    )
      .then((response) => {
        setSubscriptionId(response);
      })
      .catch((error) => {
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' });
      });
  }, [requestInfo?.followup_package, requestInfo?.plan_program, requestInfo?.plan_duration, firstName, lastName]);

  const registerClient = useCallback(async () => {
    const data = {
      subscriptionId: subscriptionId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: requestInfo?.phone_number,
      planType: requestInfo?.plan_program,
      planDuration: requestInfo?.plan_duration,
      followUpPackage: requestInfo?.followup_package,
    };
    await registerClientRequest({ ...data, signUpCode })
      .then((response) => {})
      .catch((error) => {
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' });
      });
  }, [subscriptionId]);

  const generateUniqueSignUpCode = () => {
    const timestamp = new Date().getTime(); // Current time in milliseconds
    const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // Two long random strings
    setSignUpCode(timestamp.toString(36) + '-' + randomPart);
  };

  useEffect(() => {
    generateUniqueSignUpCode();
  }, []);

  useEffect(() => {
    if (subscriptionId) {
      registerClient();
    }
  }, [subscriptionId]);

  return (
    <Dialog open={secretCodePopUp} onClose={() => triggerSecretCodePopUp(false)} fullWidth>
      <DialogTitle variant="h3">
        {currentLang.value === 'ar' ? 'تمت عملية الدفع بنجاح !' : 'Payment Successfull !'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Lottie animationData={success} style={{ width: 300 }} />
        </Box>
        <Typography variant="h6">
          {currentLang.value === 'ar' ? 'هذا هو رقم الاشتراك الخاص بك' : 'Here is your Subscription ID'}
        </Typography>
        <Box sx={{ mt: 1, bgcolor: 'grey.300', borderRadius: 1, px: 1, width: 'fit-content', alignItems: 'center' }}>
          <Typography color="primary.main" variant="h6">
            {subscriptionId}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {currentLang.value === 'ar' ? 'هذا هو مفتاحك السري' : 'Here is your Secret Key'}
        </Typography>
        <Stack
          direction="row"
          sx={{ mt: 1, bgcolor: 'grey.300', borderRadius: 1, px: 1, width: 'fit-content', alignItems: 'center' }}
        >
          <Typography color="primary.main" variant="h6">
            {signUpCode}
          </Typography>
          <Tooltip title="Copy">
            <IconButton onClick={handleCopy}>
              <Iconify icon="solar:copy-broken" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1, color: 'primary.main' }}>
          {currentLang.value === 'ar'
            ? 'يرجى أخذ لقطة شاشة لهذه النافذة حيث إنها تعد إيصالك وتحتوي على معلومات هامة لن يتم عرضها مرة أخرى.'
            : 'Please Take A Screenshot Of This Dialog As It Acts As Your Receipt And Holds Critical Info Which Will Not Be Shown Again.'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          endIcon={
            <Iconify
              icon="iconamoon:send-light"
              sx={{ transform: currentLang.value === 'ar' ? 'rotate(180deg)' : null }}
            />
          }
          onClick={() => window.open(`https://informa-portal.vercel.app/auth/signup?signUpCode=${signUpCode}`)}
        >
          {currentLang.value === 'ar' ? 'تسجيل' : 'Sign Up'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SecretCodePopUp;
