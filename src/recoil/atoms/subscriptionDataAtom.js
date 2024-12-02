import { atom } from 'recoil';

const subscriptionDataAtom = atom({
  key: 'subscriptionData',
  default: {
    program: '',
    duration: null,
    followUpPackage: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  },
});

export default subscriptionDataAtom;
