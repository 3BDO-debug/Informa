import React, { useEffect, useState } from 'react';
// next
import Image from 'next/image';
// mui
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
// recoil
import { useSetRecoilState } from 'recoil';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
// hooks
import useLocales from 'src/hooks/useLocales';
// assets
import mobile from '../../public/mobileApp.png';
import logo from '../../public/logo.png';
// components
import Iconify from 'src/components/Iconify';
import QrPopUp from 'src/components/QrPopUp';

function mobileApp() {
  const [device, setDevice] = useState('');

  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const triggerAlert = useSetRecoilState(alertAtom);

  const [qrPopUp, triggerQrPopUp] = useState(false);
  const [link, setLink] = useState(null);

  const { translate } = useLocales();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/android/.test(userAgent)) {
        setDevice('android');
      } else if (/iphone|ipad|ipod/.test(userAgent)) {
        setDevice('ios');
      } else if (/macintosh|mac os x/.test(userAgent)) {
        setDevice('mac');
      } else if (/windows/.test(userAgent)) {
        setDevice('pc');
      }
    }
  }, []);

  //----------------------------------------------

  const handleDownload = () => {
    if (device === 'ios') {
      window.open('https://apps.apple.com/eg/app/informa-180/id6741183566', '_self');
    } else if (device === 'android') {
      window.open('https://expo.dev/artifacts/eas/3ReCTByYM6uLcxsTQQnS42.apk', '_self');
    } else {
      triggerAlert({
        triggered: 'success',
        type: 'warning',
        message: translate('pagesTranslations.mobileAppPageTranslations.generalWarning'),
      });
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Grid container sx={{ my: 20 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: isMdOrLarger ? '50vh' : '35vh',
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {translate('pagesTranslations.mobileAppPageTranslations.title1')}
              </Typography>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                {translate('pagesTranslations.mobileAppPageTranslations.title2')}
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                {translate('pagesTranslations.mobileAppPageTranslations.title3')}
              </Typography>
              <Stack
                direction={isMdOrLarger ? 'row' : 'column'}
                alignItems="center"
                gap={3}
                sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
              >
                <Stack
                  onClick={() => {
                    if (device === 'android') {
                      window.open('https://expo.dev/artifacts/eas/3ReCTByYM6uLcxsTQQnS42.apk', '_self');
                    } else if (device !== 'ios' && device !== 'android') {
                      setLink('https://expo.dev/artifacts/eas/3ReCTByYM6uLcxsTQQnS42.apk');
                      triggerQrPopUp(true);
                    } else {
                      triggerAlert({
                        triggered: 'true',
                        type: 'warning',
                        message: translate('pagesTranslations.mobileAppPageTranslations.androidWarning'),
                      });
                    }
                  }}
                  direction="row"
                  alignItems="center"
                  gap={3}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: 'grey.300',
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Iconify icon="openmoji:android" sx={{ fontSize: 30 }} />
                    <Typography>{translate('pagesTranslations.mobileAppPageTranslations.android')}</Typography>
                  </Stack>
                  <Iconify icon="fluent:qr-code-24-regular" sx={{ fontSize: 30 }} />
                </Stack>
                <Stack
                  onClick={() => {
                    if (device === 'ios') {
                      window.open('https://apps.apple.com/eg/app/informa-180/id6741183566', '_self');
                    } else if (device !== 'ios' && device !== 'android') {
                      setLink('https://apps.apple.com/eg/app/informa-180/id6741183566');
                      triggerQrPopUp(true);
                    } else {
                      triggerAlert({
                        triggered: 'true',
                        type: 'warning',
                        message: translate('pagesTranslations.mobileAppPageTranslations.iosWarning'),
                      });
                    }
                  }}
                  direction="row"
                  alignItems="center"
                  gap={3}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: 'grey.300',
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Iconify icon="mdi:apple" sx={{ fontSize: 30 }} />
                    <Typography>{translate('pagesTranslations.mobileAppPageTranslations.ios')}</Typography>
                  </Stack>
                  <Iconify icon="fluent:qr-code-24-regular" sx={{ fontSize: 30 }} />
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={mobile} alt="Mobile" objectFit="cover" />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#161c23', paddingY: 2 }}>
        <Container maxWidth="md">
          <Stack
            direction={isMdOrLarger ? 'row' : 'column'}
            gap={3}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" alignItems="center" gap={2}>
              <Box sx={{ bgcolor: 'grey.0', borderRadius: 2, width: 70, p: 1 }}>
                <Image src={logo} alt="Logo" objectFit="contain" />
              </Box>
              <Stack>
                <Typography sx={{ color: 'grey.0', fontWeight: 'bold' }}>
                  {translate('pagesTranslations.mobileAppPageTranslations.app')}
                </Typography>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {translate('pagesTranslations.mobileAppPageTranslations.title1')}
                </Typography>
              </Stack>
            </Stack>
            <Box>
              <Button onClick={handleDownload} variant="outlined" sx={{ color: 'grey.0', borderColor: 'grey.0' }}>
                {translate('pagesTranslations.mobileAppPageTranslations.title3')}
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
      <QrPopUp
        isTriggered={qrPopUp}
        closeHandler={() => {
          triggerQrPopUp(false);
        }}
        link={link}
      />
    </Box>
  );
}

export default mobileApp;
