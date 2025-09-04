import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
// material
import { Box, Fab, Stack, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import announcementPopUpAtom from 'src/recoil/atoms/announcementPopUpAtom';
// hooks
import useLocales from 'src/hooks/useLocales';
// __apis__
import { userIpRegionFetcher } from 'src/__apis__/userIpRegion';
// theme
import palette from 'src/theme/palette';
// components
import Header from './Header/Index';
import Footer from './Footer';
import { MotionViewport, varFade } from './animate';
import RegisterNowPopUp from './RegisterNowPopUp';
import JoinUsPopUp from './JoinUsPopUp';
import Alert from './Alert';
import Iconify from './Iconify';
import AnnouncementPopUp from './AnnouncementPopUp';
import FollowUpPackageExplainationPopUp from './FollowUpPackageExplainationPopUp';
import RefundPolicyPopUp from './RefundPolicyPopUp';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import StripeCheckout from './checkout/StripeCheckout';
import PaymentPopUp from './checkout/PaymentPopUp';
import SecretCodePopUp from './checkout/SecretCodePopUp';
import RamadanOffer from './RamadanOffer';

// -------------------------------------------------------------------------------------------

function AppWrapper({ children }) {
  const [registerNowPopUp, triggerRegisterNowPopUpAtom] = useRecoilState(registerNowPopUpAtom);

  const { translate, currentLang } = useLocales();

  const [userIpRegion, setUserIpRegion] = useRecoilState(userIpRegionAtom);

  const [announcementPopUp, triggerAnnouncementPopUp] = useRecoilState(announcementPopUpAtom);

  const [viewActionButtons, setViewActionButtons] = useState(false);

  const triggerRefundPolicyPopUp = useSetRecoilState(refundPolicyPopUpAtom);

  const { query, push } = useRouter();

  const { onChangeLang } = useLocales();

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log('Error fetching user region', error);
        setUserIpRegion(null);
      });
  }, [setUserIpRegion]);

  useEffect(() => {
    fetchUserIpRegion();
  }, []);

  const shouldRenderActionButtons = useCallback(() => {
    let shouldRender = true;

    if (announcementPopUp) {
      shouldRender = false;
    }

    if (registerNowPopUp) {
      shouldRender = false;
    }

    return shouldRender;
  }, [announcementPopUp, registerNowPopUp]);

  useEffect(() => {
    if (Boolean(query.lang)) {
      onChangeLang(query.lang);
    }
  }, [query]);

  useEffect(() => {
    if (query.refundPolicy === 'show') {
      triggerRefundPolicyPopUp(true);
    }
  }, [query]);

  const [offerPopUp, triggerOfferPopUp] = useState(true);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-09-10T00:00:00+02:00');
    // +02:00 → Cairo time (Eastern European Time without DST)

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Box>{children}</Box>
        {/* Footer */}
        <Footer />
      </Box>
      {/* Register now */}
      <RegisterNowPopUp />
      {/* Payment */}
      <PaymentPopUp />
      {/* Secret code PopUp */}
      <SecretCodePopUp />
      {/* Follow up package explaination pop up */}
      <FollowUpPackageExplainationPopUp />
      {/* Join us */}
      <JoinUsPopUp />
      {/* Announcement pop up */}
      <AnnouncementPopUp />
      {/* Floating action button */}
      {shouldRenderActionButtons() && (
        <Box
          sx={{
            position: 'sticky',
            float: 'right',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10000,
          }}
        >
          {/* <Fab color="secondary" variant="extended" sx={{ mb: 2 }} onClick={() => triggerAnnouncementPopUp(true)}>
            <Box component="img" src="/icons/muscle.png" mr={1} width={30} />
            <Typography variant="subtitle2">تحدي انفورما</Typography>
          </Fab> */}
          <Fab
            onClick={() => {
              // triggerRegisterNowPopUpAtom(true);
              push('/checkout');
            }}
            variant="extended"
            sx={{ mb: 2 }}
          >
            {translate('componentsTranslations.fabButtonTranslations.text')} <CreateIcon sx={{ ml: 1 }} />
          </Fab>
          <Fab
            onClick={() => {
              // triggerRegisterNowPopUpAtom(true);
              push('/checkout');
            }}
            variant="extended"
            sx={{ paddingY: 6 }}
          >
            <Stack alignItems="center">
              <Typography variant="h6">{translate('componentsTranslations.fabButtonTranslations.offer1')} </Typography>
              <Typography variant="h6">
                {translate('componentsTranslations.fabButtonTranslations.offer2')}{' '}
                {userIpRegion !== 'EG' && (currentLang.value === 'ar' ? 'و الميجا' : '& MEGA')}{' '}
                {currentLang.value === 'ar' ? '' : 'PACKAGES'}
              </Typography>
              <Typography variant="h6">
                {translate('componentsTranslations.fabButtonTranslations.offer3')} {timeLeft.days}d {timeLeft.hours}h{' '}
                {timeLeft.minutes}m {timeLeft.seconds}s
              </Typography>
            </Stack>
          </Fab>
        </Box>
      )}

      {/* Snackbar alert */}
      <Alert />
      {/* Refund policy pop up */}
      {/*   <RamadanOffer
        isTriggered={offerPopUp}
        closeHandler={() => {
          triggerOfferPopUp(false);
        }}
      /> */}
      <RefundPolicyPopUp />
    </>
  );
}

export default AppWrapper;
