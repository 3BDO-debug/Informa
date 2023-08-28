import { atom } from 'recoil';

const refundPolicyPopUpAtom = atom({
  key: 'refundPolicyPopUp',
  default: {
    show: false,
    answer: null,
  },
});

export default refundPolicyPopUpAtom;
