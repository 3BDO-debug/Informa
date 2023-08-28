import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
// components
import Logo from '../components/Logo';
import { Box, Container } from '@mui/material';
import Alert from 'src/components/Alert';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

LogoOnlyLayout.propTypes = {
  children: PropTypes.node,
};

export default function LogoOnlyLayout({ children }) {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.neutral, width: '100%', height: '100%' }}>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
      <Container sx={{ backgroundColor: theme.palette.background.neutral, width: '100%', height: '100%' }}>
        <Box sx={{ backgroundColor: theme.palette.background.neutral, width: '100%', height: '100%' }}>{children}</Box>
      </Container>
      {/* Snackbar alert */}
      <Alert />
    </Box>
  );
}
