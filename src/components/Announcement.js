import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// material
import { Box, Container, useTheme } from '@mui/material';
// __apis__
import { announcementsFetcher } from 'src/__apis__/offers';
// hooks
import useLocales from 'src/hooks/useLocales';
import useOffSetTop from 'src/hooks/useOffSetTop';
// utils
import cssStyles from 'src/utils/cssStyles';
// theme
import palette from 'src/theme/palette';
// components
import Markdown from './Markdown';

// ---------------------------------------------------------------------------------

function Announcement() {
  const theme = useTheme();

  const isOffset = useOffSetTop(120);

  const { pathname } = useRouter();

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
      <Box
        sx={{
          ...cssStyles(theme).bgBlur({
            blur: 4,
            color: palette.dark.background.default,
            opacity: isOffset ? 1 : 0.4,
          }),
        }}
      >
        <Container>
          <Box
            sx={{
              pt: pathname === '/' ? 4 : 2,
              pb: pathname === '/' ? 4 : 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box component="img" src="/icons/announcement.png" width={45} height={45} mr={4} />
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
