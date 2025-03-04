import React from 'react';
// next
import Image from 'next/image';
import { useRouter } from 'next/router';
// @mui
import { Button, Dialog, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
// iconify
import Iconify from './Iconify';
// assets
import offer from '../assets/ramadanOffer.png';

function RamadanOffer({ isTriggered, closeHandler }) {
  const { query, push } = useRouter();

  const theme = useTheme();
  const isSmOrLarger = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Dialog
      open={isTriggered}
      onClose={closeHandler}
      PaperProps={{
        sx: {
          background: 'none',
        },
      }}
    >
      <Image src={offer} alt="Ramadan Offer" priority />
      <Tooltip title="close">
        <IconButton sx={{ position: 'absolute', color: 'grey.0' }} onClick={closeHandler}>
          <Iconify icon="hugeicons:cancel-01" sx={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
      <Button
        variant="contained"
        sx={{
          alignSelf: 'center',
          width: '40%',
          position: 'absolute',
          bottom: isSmOrLarger ? 60 : 20,
          borderRadius: 30,
        }}
        onClick={() => {
          push('/checkout');
        }}
      >
        اشترك الآن
      </Button>
    </Dialog>
  );
}

export default RamadanOffer;
