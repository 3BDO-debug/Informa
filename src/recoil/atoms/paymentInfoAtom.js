import { atom } from 'recoil';

const paymentInfoAtom = atom({
  key: 'paymentInfo',
  default: {
    price: null,
    region: null,
  },
});

export default paymentInfoAtom;
