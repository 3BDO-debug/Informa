import { selector } from 'recoil';
// atoms
import userPlanAtom from '../atoms/userPlanAtom';
// utils
import customizeUserPlan from 'src/utils/customizeUserPlan';

// -----------------------------------------------------------------------------

const userPlanSelector = selector({
  key: 'customizedUserPlan',
  get: ({ get }) => {
    const userPlan = get(userPlanAtom);
    const totalPlanPrice = customizeUserPlan(userPlan.followUpPackage, userPlan.program, userPlan.duration);
    return totalPlanPrice;
  },
});

export default userPlanSelector;
