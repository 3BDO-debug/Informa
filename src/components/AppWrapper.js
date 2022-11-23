import React, { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
// material
import { Box, Fab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
// hooks
import useLocales from 'src/hooks/useLocales';
// __apis__
import { userIpRegionFetcher } from 'src/__apis__/userIpRegion';
// components
import Header from './Header/Index';
import Footer from './Footer';
import { MotionViewport, varFade } from './animate';
import RegisterNowPopUp from './RegisterNowPopUp';
import JoinUsPopUp from './JoinUsPopUp';
import Alert from './Alert';

// -------------------------------------------------------------------------------------------

function AppWrapper({ children }) {
  const triggerRegisterNowPopUpAtom = useSetRecoilState(registerNowPopUpAtom);

  const { translate } = useLocales();

  const setUserIpRegion = useSetRecoilState(userIpRegionAtom);

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log('Error fetching user region', error);
        setUserIpRegion(null);
      });
  }, []);

  useEffect(() => {
    fetchUserIpRegion();
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
      {/* Join us */}
      <JoinUsPopUp />
      {/* Floating action button */}
      <Fab
        onClick={() => triggerRegisterNowPopUpAtom(true)}
        variant="extended"
        sx={{ position: 'sticky', float: 'right', bottom: '20px', right: '20px' }}
      >
        {translate('componentsTranslations.fabButtonTranslations.text')} <CreateIcon sx={{ ml: 1 }} />
      </Fab>
      {/* Snackbar alert */}
      <Alert />
    </>
  );
}

export default AppWrapper;
