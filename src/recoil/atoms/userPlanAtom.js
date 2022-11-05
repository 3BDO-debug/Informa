import { atom } from 'recoil';

const userPlanAtom = atom({
  key: 'userPlan',
  default: {
    program: 'nutrition-workout',
    duration: 6,
    followUpPackage: null,
    totalPrice: null,
  },
});

export default userPlanAtom;
