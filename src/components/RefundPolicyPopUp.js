import React from 'react';
// @mui
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useRecoilState } from 'recoil';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import { useRouter } from 'next/router';
import useLocales from 'src/hooks/useLocales';

// ------------------------------------------------------------------

function RefundPolicyPopUp() {
  const [refundPolicy, triggerRefundPolicy] = useRecoilState(refundPolicyPopUpAtom);

  const { translate } = useLocales();

  const { query, push } = useRouter();

  const closeHandler = () => {
    if (query.refundPolicy === 'show') {
      push('/');
    }
    triggerRefundPolicy({ ...refundPolicy, answer: null });
  };

  const onAgreeHandler = () => {
    triggerRefundPolicy({ show: false, answer: 'agreed' });
  };

  const onDeclineHandler = () => {
    triggerRefundPolicy({ show: false, answer: 'declined' });
  };

  return (
    <Dialog open={refundPolicy.show} onClose={closeHandler} fullWidth>
      <DialogTitle>{translate('componentsTranslations.refundPolicyPopUpTranslations.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mt: 2 }}>
          {translate('componentsTranslations.refundPolicyPopUpTranslations.content')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={onDeclineHandler}>
          {translate('componentsTranslations.refundPolicyPopUpTranslations.declineButton')}
        </Button>
        <Button onClick={onAgreeHandler} variant="contained">
          {translate('componentsTranslations.refundPolicyPopUpTranslations.actionButton')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RefundPolicyPopUp;
