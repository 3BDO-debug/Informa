// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// hooks
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled(Container)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const { translate } = useLocales();

  const LINKS = [
    {
      headline: translate('componentsTranslations.footerTranslations.links.title'),
      children: [
        { name: translate('componentsTranslations.footerTranslations.links.1'), href: '/' },
        { name: translate('componentsTranslations.footerTranslations.links.2'), href: '/transformations' },
        { name: translate('componentsTranslations.footerTranslations.links.3'), href: '/plans-&-pricing' },
        { name: translate('componentsTranslations.footerTranslations.links.4'), href: '/about-us' },
        { name: translate('componentsTranslations.footerTranslations.links.5'), href: '/contact-us' },
      ],
    },
    {
      headline: translate('componentsTranslations.footerTranslations.contact.title'),
      children: [{ name: 'Informa.180.sales@gmail.com', href: 'mailto:Informa.180.sales@gmail.com' }],
    },
  ];

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" width={60} height={60}>
              <Box component="img" src={'/logo-icon.png'} />
            </Box>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              {translate('componentsTranslations.footerTranslations.about')}
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.facebook.com/informa180/')}>
                  <Box component="img" src="/icons/facebook.png" width={30} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.tiktok.com/@informa180?lang=en')}>
                  <Box component="img" src="/icons/tik-tok.png" width={30} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.instagram.com/informa180/')}>
                  <Box component="img" src="/icons/instagram.png" width={30} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.youtube.com/channel/UCR-l_KqB-t4B_qyDccJHtOQ')}>
                  <Box component="img" src="/icons/youtube.png" width={30} />
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
                  <Box component="img" src="/icons/whatsapp.png" width={30} />
                </IconButton>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2022. <strong>Informa</strong> All rights reserved <br /> Developed with all Love by
          <strong>
            <a href="https://www.basedontech.com" target="__blank" style={{ marginLeft: '5px', color: '#B3852E' }}>
              Based On Tech
            </a>
          </strong>
        </Typography>
      </Container>
    </RootStyle>
  );
}
