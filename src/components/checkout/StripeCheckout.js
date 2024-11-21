import React, { useCallback, useEffect, useState } from 'react';
// stripe
// StripeCheckout.js
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button } from '@mui/material';
// __apis__
import { fetchClientSecret } from 'src/__apis__/payment';
import {
  clientSubscriptionIdRequest,
  registerClientRequest,
  proceedTrainingRequest,
} from 'src/__apis__/personalTraining';
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

const stripePromise = loadStripe(
  'pk_test_51MU6GUDUPkE56DQ9qaD6OAoOEgA0WJNw6TLWb4MG1N88HMS3erP9tTcKwDfGYLQXtrXNybjOkfAxuXDkoO0G8WeA00j4ue8GDK'
);

const CheckoutForm = () => {
  const triggerAlert = useSetRecoilState(alertAtom);

  const { currentLang } = useLocales();

  const [paymentInfo, setPaymentInfo] = useRecoilState(paymentInfoAtom);
  const [paymentPopUp, triggerPaymentPopUp] = useRecoilState(chechoutPopUpAtom);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[PaymentMethod Error]', error);
      triggerAlert({
        triggered: true,
        type: 'error',
        message: error.message,
      });
      setLoading(false);
      return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      console.log('[Confirm Payment Error]', confirmError);
      triggerAlert({
        triggered: true,
        type: 'error',
        message: 'Error confirming payment',
      });
      setLoading(false);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      console.log('[PaymentIntent Success]', paymentIntent);
      triggerAlert({
        triggered: true,
        type: 'success',
        message: 'Payment successful!',
      });
      proceedTrainingRequestStatus();
      triggerPaymentPopUp(false);
    } else {
      triggerAlert({
        triggered: true,
        type: 'error',
        message: 'Payment failed or was incomplete.',
      });
    }
    setLoading(false);
  };

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
  }, [paymentInfo, createPaymentIntent]);

  //--------------------------------------------------------------------

  const [secretCodePopUp, triggerSecretCodePopUp] = useRecoilState(secretCodePopUpAtom);

  const requestId = useRecoilValue(trainingRequestIdAtom);
  const subscriptionData = useRecoilValue(subscriptionDataAtom);
  const [subscriptionId, setSubscriptionId] = useState(null);

  const proceedTrainingRequestStatus = useCallback(async () => {
    await proceedTrainingRequest({ requestId: requestId })
      .then((response) => {
        createSubscriptionId();
      })
      .catch((error) =>
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' })
      );
  }, [requestId]);

  const createSubscriptionId = useCallback(async () => {
    await clientSubscriptionIdRequest(
      subscriptionData.followUpPackage,
      subscriptionData.program,
      subscriptionData.duration,
      subscriptionData.firstName,
      subscriptionData.lastName
    )
      .then((response) => {
        setSubscriptionId(response);
      })
      .catch((error) => {
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' });
      });
  }, [
    subscriptionData.followUpPackage,
    subscriptionData.program,
    subscriptionData.duration,
    subscriptionData.firstName,
    subscriptionData.lastName,
  ]);

  const registerClient = useCallback(async () => {
    const data = {
      subscriptionId: subscriptionId,
      firstName: subscriptionData.firstName,
      lastName: subscriptionData.lastName,
      phoneNumber: subscriptionData.phoneNumber,
      planType: subscriptionData.program,
      planDuration: subscriptionData.duration,
      followUpPackage: subscriptionData.followUpPackage,
    };
    const signUpCode = secretCodePopUp.code;
    await registerClientRequest({ ...data, signUpCode })
      .then((response) => {
        triggerSecretCodePopUp({ triggered: true, code: signUpCode });
      })
      .catch((error) => {
        triggerAlert({ triggered: true, type: 'error', message: 'Something wrong happened, Contact Support' });
      });
  }, [subscriptionId]);

  const generateUniqueSignUpCode = () => {
    const timestamp = new Date().getTime(); // Current time in milliseconds
    const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // Two long random strings
    triggerSecretCodePopUp({ code: timestamp.toString(36) + '-' + randomPart });
  };

  useEffect(() => {
    if (subscriptionId) {
      registerClient();
    }
  }, [subscriptionId]);

  useEffect(() => {
    generateUniqueSignUpCode();
  }, []);

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
          hidePostalCode: true,
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LoadingButton
          sx={{ marginTop: 2, mx: 2 }}
          variant="contained"
          type="submit"
          loading={loading}
          disabled={!stripe}
        >
          {currentLang === 'ar' ? 'دفع' : 'Pay'}
        </LoadingButton>
      </Box>
    </form>
  );
};

const StripeCheckout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckout;
