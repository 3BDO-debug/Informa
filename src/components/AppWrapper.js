import React from 'react';
import { useSetRecoilState } from 'recoil';
// material
import { Box, Fab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
// atoms
import registerNowPopUpAtom from 'src/recoil/registerNowPopUpAtom';
// components
import Header from './Header/Index';
import Footer from './Footer';
import { MotionViewport, varFade } from './animate';
import RegisterNowPopUp from './RegisterNowPopUp';
import JoinUsPopUp from './JoinUsPopUp';

// -------------------------------------------------------------------------------------------

function AppWrapper({ children }) {
  const triggerRegisterNowPopUpAtom = useSetRecoilState(registerNowPopUpAtom);

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
      <Fab
        onClick={() => triggerRegisterNowPopUpAtom(true)}
        variant="extended"
        sx={{ position: 'sticky', float: 'right', bottom: '20px', right: '20px' }}
      >
        Register now <CreateIcon sx={{ ml: 1 }} />
      </Fab>
    </>
  );
}

export default AppWrapper;
