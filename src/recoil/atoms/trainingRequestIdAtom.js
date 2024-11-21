import { atom } from 'recoil';

const trainingRequestIdAtom = atom({
  key: 'trainingRequestId',
  default: null,
});

export default trainingRequestIdAtom;
