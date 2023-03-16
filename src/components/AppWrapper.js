import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
// material
import { Box, Fab, Typography } from '@mui/material';
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

// -------------------------------------------------------------------------------------------

function AppWrapper({ children }) {
  const [registerNowPopUp, triggerRegisterNowPopUpAtom] = useRecoilState(registerNowPopUpAtom);

  const { translate } = useLocales();

  const setUserIpRegion = useSetRecoilState(userIpRegionAtom);

  const [announcementPopUp, triggerAnnouncementPopUp] = useRecoilState(announcementPopUpAtom);

  const [viewActionButtons, setViewActionButtons] = useState(false);

  const { query } = useRouter();

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
    fetchUserIpRegion();
  }, []);

  useEffect(() => {
    if (Boolean(query.lang)) {
      onChangeLang(query.lang);
    }
  }, [query]);

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
          <Fab color="secondary" variant="extended" sx={{ mb: 2 }} onClick={() => triggerAnnouncementPopUp(true)}>
            <Box component="img" src="/icons/muscle.png" mr={1} width={30} />
            <Typography variant="subtitle2">تحدي انفورما</Typography>
          </Fab>
          <Fab
            onClick={() => {
              triggerRegisterNowPopUpAtom(true);
            }}
            variant="extended"
          >
            {translate('componentsTranslations.fabButtonTranslations.text')} <CreateIcon sx={{ ml: 1 }} />
          </Fab>
        </Box>
      )}

      {/* Snackbar alert */}
      <Alert />
    </>
  );
}

export default AppWrapper;
