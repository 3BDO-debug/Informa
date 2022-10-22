// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Informa',
    children: [
      { name: 'Home', href: 'about-us' },
      { name: 'Transformations', href: 'contact-us' },
      { name: 'Plans & Pricing', href: 'projects' },
      { name: 'About Us', href: '/' },
      { name: 'Contact Us', href: '/' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'info@basedontech.com', href: 'mailto:info@basedontech.com' },
      { name: '(+20) 1017003476', href: 'tel:+201017003476' },
    ],
  },
];

const RootStyle = styled(Container)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Footer() {
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
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here'.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.facebook.com/Based.On.T')}>
                  <FacebookIcon sx={{ color: '#3b5998' }} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.linkedin.com/company/justcode4it/')}>
                  <LinkedInIcon sx={{ color: '#0e76a8' }} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.instagram.com/based_on_tech/')}>
                  <InstagramIcon sx={{ color: '#833AB4' }} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.youtube.com/channel/UCtZVorrnQDOzmhgCox7C-nQ')}>
                  <YouTubeIcon sx={{ color: '#c4302b' }} />
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
