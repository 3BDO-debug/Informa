import React, { useCallback, useEffect, useState } from 'react';
// stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// @mui
import { Box, Button, TextField } from '@mui/material';
// lottie-react
import Lottie from 'lottie-react';
// __apis__
import { fetchClientSecret } from 'src/__apis__/payment';
// recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
import paymentInfoAtom from 'src/recoil/atoms/paymentInfoAtom';
import chechoutPopUpAtom from 'src/recoil/atoms/checkoutPopUpAtom';
import trainingRequestIdAtom from 'src/recoil/atoms/trainingRequestIdAtom';
import subscriptionDataAtom from 'src/recoil/atoms/subscriptionDataAtom';
import secretCodePopUpAtom from 'src/recoil/atoms/secretCodePopUp';
// components
import Iconify from '../Iconify';
import useLocales from 'src/hooks/useLocales';
import { LoadingButton } from '@mui/lab';
// animations
import loadingPaymentForm from '../../assets/animations/loadingPaymentForm.json';
//-------------------------------------------------------

const stripePromise = loadStripe(
  'pk_live_51MU6GUDUPkE56DQ9Uy8040Yo91kuW9OTN3UlhN5oGQhAqX0x0GwdkwAtPyNu4Qlpd3UGwQlGzrLoXdk4x8Rw320x00OE7z7w65'
);

const CheckoutForm = () => {
  const triggerAlert = useSetRecoilState(alertAtom);
  const { currentLang } = useLocales();

  const subscriptionData = useRecoilValue(subscriptionDataAtom);

  const [paymentInfo, setPaymentInfo] = useRecoilState(paymentInfoAtom);
  const [paymentPopUp, triggerPaymentPopUp] = useRecoilState(chechoutPopUpAtom);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      triggerAlert({
        triggered: true,
        type: 'error',
        message: 'Stripe has not loaded properly.',
      });
      return;
    }

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: `${subscriptionData.firstName}${subscriptionData.lastName ? ` ${subscriptionData.lastName}` : ''}`,
            email: subscriptionData.email,
            phone: subscriptionData.phoneNumber,
          },
        },
        return_url: `http://localhost:3030?phone=${subscriptionData.phoneNumber}`,
      },
    });

    if (error) {
      console.error('[Payment Error]', error);
      triggerAlert({
        triggered: true,
        type: 'error',
        message: error.message,
      });
      setLoading(false);
      return;
    }

    triggerAlert({
      triggered: true,
      type: 'success',
      message: 'Payment is being processed!',
    });
    setLoading(false);
    triggerPaymentPopUp(false);
  };

  //--------------------------------------------------------------------

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={{ layout: 'tabs' }} />
      <Box>
        <LoadingButton
          sx={{ marginTop: 2, width: '100%' }}
          variant="contained"
          type="submit"
          loading={loading}
          disabled={!stripe}
        >
          {currentLang.value === 'ar' ? 'دفع' : 'Pay'} {paymentInfo.price} {paymentInfo.region === 'EG' ? 'EGP' : 'USD'}
        </LoadingButton>
      </Box>
    </form>
  );
};

const StripeCheckout = () => {
  const triggerAlert = useSetRecoilState(alertAtom);
  const [paymentInfo, setPaymentInfo] = useRecoilState(paymentInfoAtom);

  const [clientSecret, setClientSecret] = useState('');

  const createPaymentIntent = useCallback(async () => {
    await fetchClientSecret(paymentInfo?.price, paymentInfo?.region)
      .then((response) => {
        setClientSecret(response?.client_secret);
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: 'error',
          message: 'Failed to create payment intent',
        });
      });
  }, [paymentInfo]);

  useEffect(() => {
    if (paymentInfo) {
      createPaymentIntent();
    }
  }, [createPaymentIntent, paymentInfo]);

  return clientSecret ? (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Lottie animationData={loadingPaymentForm} style={{ width: 400 }} />
    </Box>
  );
};

export default StripeCheckout;
