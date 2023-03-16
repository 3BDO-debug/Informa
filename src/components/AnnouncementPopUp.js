import React, { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
// material
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from '@mui/material';
// atoms
import announcementPopUpAtom from 'src/recoil/atoms/announcementPopUpAtom';
// __apis__
import { announcementsFetcher } from 'src/__apis__/offers';
// hooks
import useLocales from 'src/hooks/useLocales';
// componenta
import Markdown from './Markdown';
import palette from 'src/theme/palette';
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';

// -------------------------------------------------------------------------------------------------------------

function AnnouncementPopUp() {
  const [announcementPopUp, triggerAnnouncementPopUp] = useRecoilState(announcementPopUpAtom);

  const triggerRegisterNowPopUp = useSetRecoilState(registerNowPopUpAtom);

  const { currentLang, translate } = useLocales();

  return (
    <Dialog
      PaperProps={{ sx: { backgroundColor: palette.dark.background.default } }}
      open={announcementPopUp}
      fullWidth
      onClose={() => triggerAnnouncementPopUp(false)}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', color: palette.dark.text.primary }}>
        <Box component="img" src="/icons/announcement.png" width={30} height={30} mr={2} />
        {translate('componentsTranslations.announcementPopUpTranslations.title')}
      </DialogTitle>
      <DialogContent>
        <Box marginTop={5}>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PIavGek2uBM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            triggerAnnouncementPopUp(false);
            /* triggerRegisterNowPopUp(true); */
          }}
          variant="contained"
        >
          {translate('componentsTranslations.announcementPopUpTranslations.actionButton')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AnnouncementPopUp;
