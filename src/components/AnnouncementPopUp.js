import React, { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
// material
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from '@mui/material';
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

  const [announcement, setAnnouncement] = useState(null);
  const triggerRegisterNowPopUp = useSetRecoilState(registerNowPopUpAtom);

  const { currentLang } = useLocales();

  const fetchAnnouncement = useCallback(async () => {
    await announcementsFetcher()
      .then((response) => {
        setAnnouncement(response);
      })
      .catch((error) => {
        setAnnouncement(null);
        console.log('Error fetching announcement', error);
      });
  }, []);

  useEffect(() => {
    fetchAnnouncement();
  }, [fetchAnnouncement]);

  return (
    <Dialog
      PaperProps={{ sx: { backgroundColor: palette.dark.background.default } }}
      open={announcementPopUp}
      onClose={() => triggerAnnouncementPopUp(false)}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', color: palette.dark.text.primary }}>
        <Box component="img" src="/icons/announcement.png" width={30} height={30} mr={2} />
        Announcement
      </DialogTitle>
      <DialogContent>
        <Box paddingTop={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Markdown
            children={currentLang.value === 'en' ? announcement?.english_markdown : announcement?.arabic_markdown}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            triggerAnnouncementPopUp(false);
            triggerRegisterNowPopUp(true);
          }}
          variant="contained"
        >
          Register now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AnnouncementPopUp;
