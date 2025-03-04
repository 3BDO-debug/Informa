const customizeUserPlan = (followUpPackage, planProgram, planDuration) => {
  let total;

  /* Nutrition & Workout logic */
  if (planProgram === 'nutrition-workout' && planDuration === 1) {
    total = { egpPrice: 1750, usdPrice: 125 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 3) {
    total = { egpPrice: 3500, usdPrice: 250 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 6) {
    total = { egpPrice: 6000, usdPrice: 420 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 12) {
    total = { egpPrice: 9500, usdPrice: 670 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 4) {
    total = { egpPrice: 3500, usdPrice: 250 };
  }

  /* Workout logic */
  if (planProgram === 'workout' && planDuration === 1) {
    total = { egpPrice: 1000, usdPrice: 70 };
  } else if (planProgram === 'workout' && planDuration === 3) {
    total = { egpPrice: 2000, usdPrice: 140 };
  } else if (planProgram === 'workout' && planDuration === 6) {
    total = { egpPrice: 3500, usdPrice: 240 };
  } else if (planProgram === 'workout' && planDuration === 12) {
    total = { egpPrice: 6000, usdPrice: 420 };
  }

  /* Nutrition logic */
  if (planProgram === 'nutrition' && planDuration === 1) {
    total = { egpPrice: 1500, usdPrice: 90 };
  } else if (planProgram === 'nutrition' && planDuration === 3) {
    total = { egpPrice: 3000, usdPrice: 180 };
  } else if (planProgram === 'nutrition' && planDuration === 6) {
    total = { egpPrice: 4500, usdPrice: 300 };
  } else if (planProgram === 'nutrition' && planDuration === 12) {
    total = { egpPrice: 7000, usdPrice: 480 };
  }

  /* Follow-up plans logic */

  if (followUpPackage === 'golden-package' && planDuration === 1) {
    total = { egpPrice: total.egpPrice + 750, usdPrice: total.usdPrice + 50 };
  } else if (followUpPackage === 'golden-package' && planDuration === 3) {
    total = { egpPrice: total.egpPrice + 1500, usdPrice: total.usdPrice + 100 };
  } else if (followUpPackage === 'golden-package' && planDuration === 6) {
    total = { egpPrice: total.egpPrice + 2500, usdPrice: total.usdPrice + 160 };
  } else if (followUpPackage === 'golden-package' && planDuration === 12) {
    total = { egpPrice: total.egpPrice + 4000, usdPrice: total.usdPrice + 260 };
  } else if (followUpPackage === 'golden-package' && planDuration === 4) {
    total = { egpPrice: total.egpPrice + 1500, usdPrice: total.usdPrice + 100 };
  }

  if (followUpPackage === 'mega-package' && planDuration === 1) {
    total = { egpPrice: total.egpPrice + 2000, usdPrice: total.usdPrice + 125 };
  } else if (followUpPackage === 'mega-package' && planDuration === 3) {
    total = { egpPrice: total.egpPrice + 4000, usdPrice: total.usdPrice + 250 };
  } else if (followUpPackage === 'mega-package' && planDuration === 6) {
    total = { egpPrice: total.egpPrice + 6000, usdPrice: total.usdPrice + 420 };
  } else if (followUpPackage === 'mega-package' && planDuration === 12) {
    total = { egpPrice: total.egpPrice + 9500, usdPrice: total.usdPrice + 680 };
  } else if (followUpPackage === 'mega-package' && planDuration === 4) {
    total = { egpPrice: total.egpPrice + 4000, usdPrice: total.usdPrice + 250 };
  }

  return total;
};

export default customizeUserPlan;
