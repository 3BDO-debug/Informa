// StripeCheckout.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button } from '@mui/material';
import Iconify from './Iconify';
import useLocales from 'src/hooks/useLocales';

const stripePromise = loadStripe(
  'pk_live_51MU6GUDUPkE56DQ9Uy8040Yo91kuW9OTN3UlhN5oGQhAqX0x0GwdkwAtPyNu4Qlpd3UGwQlGzrLoXdk4x8Rw320x00OE7z7w65'
);

//'pk_live_51MU6GUDUPkE56DQ9Uy8040Yo91kuW9OTN3UlhN5oGQhAqX0x0GwdkwAtPyNu4Qlpd3UGwQlGzrLoXdk4x8Rw320x00OE7z7w65'
//pk_test_qblFNYngBkEdjEZ16jxxoWSM

const CheckoutForm = ({ onSuccessfulCheckout, isSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  console.log('isSuccess', isSuccess);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you can handle your backend logic including `personalTrainingRequester`
      onSuccessfulCheckout(paymentMethod.id);
    }
  };

  const { translate } = useLocales();

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              color: 'primary.main',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: 'error.main',
              iconColor: 'error.main',
            },
            complete: {
              color: 'success',
            },
          },
          hidePostalCode: true, // This hides the postal code field if you don't need it
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button sx={{ marginTop: 2, mx: 2 }} variant="outlined" type="submit" disabled={!stripe || isSuccess}>
          {isSuccess
            ? translate('componentsTranslations.registerNowPopUpTranslations.form.stripeCheckout.paid')
            : translate('componentsTranslations.registerNowPopUpTranslations.form.stripeCheckout.pay')}
        </Button>
        {isSuccess && (
          <Iconify icon="lets-icons:done-ring-round" sx={{ width: 35, height: 35, color: 'success.main' }} />
        )}
      </Box>
    </form>
  );
};

const StripeCheckout = ({ onSuccessfulCheckout, isSuccess }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm isSuccess={isSuccess} onSuccessfulCheckout={onSuccessfulCheckout} />
  </Elements>
);

export default StripeCheckout;
