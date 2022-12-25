import React from 'react';
import { useRecoilState } from 'recoil';
// material
import { Dialog, DialogTitle, DialogContent, Box, DialogActions, Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
// atoms
import followUpPackageExplainationPopUpAtom from 'src/recoil/atoms/followUpPackageExplainationPopUpAtom';
// hooks
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------------------

function FollowUpPackageExplainationPopUp() {
  const [followUpPackageExplainationPopUp, setFollowUpPackageExplainationPopUp] = useRecoilState(
    followUpPackageExplainationPopUpAtom
  );

  const { translate } = useLocales();

  const closeHandler = () => {
    setFollowUpPackageExplainationPopUp({ open: false });
  };

  return (
    <Dialog open={followUpPackageExplainationPopUp.open} onClose={closeHandler} fullWidth>
      <DialogTitle>
        {translate('componentsTranslations.followUpPackageExplainationPopUpTranslations.title')}
      </DialogTitle>
      <DialogContent>
        <Box marginTop={5}>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              width="560"
              height="315"
              src={followUpPackageExplainationPopUp.videoLink}
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
        <Button startIcon={<KeyboardReturnIcon />} onClick={closeHandler} variant="contained">
          {translate('componentsTranslations.followUpPackageExplainationPopUpTranslations.actionButton')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FollowUpPackageExplainationPopUp;
