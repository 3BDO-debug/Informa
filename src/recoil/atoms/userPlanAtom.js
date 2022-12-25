import { atom } from 'recoil';

const userPlanAtom = atom({
  key: 'userPlan',
  default: {
    program: 'nutrition-workout',
    duration: 3,
    followUpPackage: 'silver-package',
    totalPrice: null,
  },
});

export default userPlanAtom;
