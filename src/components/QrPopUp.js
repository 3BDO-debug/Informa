import React from 'react';
// mui
import { Button, Dialog, DialogContent, Box } from '@mui/material';
// react-qr-code
import QRCode from 'react-qr-code';
// hooks
import useLocales from 'src/hooks/useLocales';

function QrPopUp({ isTriggered, closeHandler, link }) {
  const { translate } = useLocales();

  return (
    <Dialog open={isTriggered} onClose={closeHandler}>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          {link && <QRCode value={link} size={400} />}
          <Button variant="contained" onClick={closeHandler} sx={{ mt: 2 }}>
            {translate('pagesTranslations.mobileAppPageTranslations.done')}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default QrPopUp;
