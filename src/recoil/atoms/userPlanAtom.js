import { atom } from 'recoil';

const userPlanAtom = atom({
  key: 'userPlan',
  default: {
    program: null,
    duration: null,
    followUpPackage: null,
    totalPrice: null,
  },
});

export default userPlanAtom;
