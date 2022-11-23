import React, { useCallback, useEffect, useState } from 'react';
// material
import { Box, Container, useTheme } from '@mui/material';
// __apis__
import { announcementsFetcher } from 'src/__apis__/offers';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import Markdown from './Markdown';

// ---------------------------------------------------------------------------------

function Announcement() {
  const theme = useTheme();

  const { currentLang } = useLocales();

  const [announcement, setAnnouncement] = useState(null);

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
    announcement && (
      <Box sx={{ background: 'linear-gradient(45deg,#e8b45c, #B3852E)' }}>
        <Container>
          <Box sx={{ pt: 2, pb: 2, display: 'flex', justifyContent: 'center' }}>
            <Markdown
              children={currentLang.value === 'en' ? announcement.english_markdown : announcement.arabic_markdown}
            />
          </Box>
        </Container>
      </Box>
    )
  );
}

export default Announcement;
