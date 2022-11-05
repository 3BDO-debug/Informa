import React from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
// material
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// theme
import palette from 'src/theme/palette';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import Logo from '../Logo';

// ------------------------------------------------------------------------------------------

const DrawerLinkText = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
}));

// ------------------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, headerLinks }) {
  const { pathname, push } = useRouter();

  const setRequestProjectPopUp = useSetRecoilState(registerNowPopUpAtom);

  const triggerRequestProjectPopUp = () => {
    setRequestProjectPopUp(true);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: palette.dark.background.default,
          },
        }}
        open={isTriggered}
        onClose={closeHandler}
        elevation={14}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Logo wrapper */}
          <Box
            onClick={() => {
              push('/');
              closeHandler();
            }}
          >
            <Logo />
          </Box>

          {/* Nav links  */}
          <List sx={{ marginTop: 2 }}>
            {headerLinks.map((headerLink, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  push(headerLink.href);
                  closeHandler();
                }}
              >
                <ListItemText>
                  <DrawerLinkText
                    variant={pathname === headerLink.href ? 'gradientText' : 'inherit'}
                    sx={{ color: 'common.white', textTransform: 'capitalize' }}
                  >
                    {headerLink.title}
                  </DrawerLinkText>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
          {/* Action button */}
          <Stack paddingRight={2} marginTop={5} paddingLeft={2} alignItems="center" justifyContent="center">
            <Button
              onClick={triggerRequestProjectPopUp}
              sx={{ marginBottom: 2 }}
              fullWidth
              variant="contained"
              endIcon={<FitnessCenterIcon />}
            >
              Transform your mindset
            </Button>
            <Button
              startIcon={<WhatsAppIcon />}
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=201090028014&text=Hello%20Informa%2C%20I%20want%20to%20get%20in%20shape.%20'
                )
              }
              fullWidth
              variant="outlined"
            >
              Contact us
            </Button>
          </Stack>
        </Box>
        {/* Socials */}
        <Stack direction="row" width="100%" justifyContent="center" marginTop={2}>
          <Box marginRight={1}>
            <IconButton onClick={() => window.open('https://www.facebook.com/informa180/')}>
              <Box component="img" src="/icons/facebook.png" width={20} />
            </IconButton>
          </Box>
          <Box marginRight={1}>
            <IconButton onClick={() => window.open('https://www.tiktok.com/@informa180?lang=en')}>
              <Box component="img" src="/icons/tik-tok.png" width={20} />
            </IconButton>
          </Box>
          <Box marginRight={1}>
            <IconButton onClick={() => window.open('https://www.instagram.com/informa180/')}>
              <Box component="img" src="/icons/instagram.png" width={20} />
            </IconButton>
          </Box>
          <Box marginRight={1}>
            <IconButton onClick={() => window.open('https://www.youtube.com/channel/UCR-l_KqB-t4B_qyDccJHtOQ')}>
              <Box component="img" src="/icons/youtube.png" width={20} />
            </IconButton>
          </Box>
          <Box marginRight={1}>
            <IconButton
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=201090028014&text=Hello%20Informa%2C%20I%20want%20to%20get%20in%20shape.%20'
                )
              }
            >
              <Box component="img" src="/icons/whatsapp.png" width={20} />
            </IconButton>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}

export default SideDrawer;
