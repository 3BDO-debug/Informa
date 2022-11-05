const customizeUserPlan = (followUpPackage, planProgram, planDuration) => {
  let total;

  /* Nutrition & Workout logic */
  if (planProgram === 'nutrition-workout' && planDuration === 1) {
    total = { egpPrice: 1500, usdPrice: 105 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 3) {
    total = { egpPrice: 3000, usdPrice: 210 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 6) {
    total = { egpPrice: 5000, usdPrice: 350 };
  } else if (planProgram === 'nutrition-workout' && planDuration === 12) {
    total = { egpPrice: 8000, usdPrice: 560 };
  }

  /* Workout logic */
  if (planProgram === 'workout' && planDuration === 1) {
    total = { egpPrice: 900, usdPrice: 60 };
  } else if (planProgram === 'workout' && planDuration === 3) {
    total = { egpPrice: 1800, usdPrice: 120 };
  } else if (planProgram === 'workout' && planDuration === 6) {
    total = { egpPrice: 3000, usdPrice: 200 };
  } else if (planProgram === 'workout' && planDuration === 12) {
    total = { egpPrice: 5000, usdPrice: 350 };
  }

  /* Nutrition logic */
  if (planProgram === 'nutrition' && planDuration === 1) {
    total = { egpPrice: 1150, usdPrice: 75 };
  } else if (planProgram === 'nutrition' && planDuration === 3) {
    total = { egpPrice: 2300, usdPrice: 150 };
  } else if (planProgram === 'nutrition' && planDuration === 6) {
    total = { egpPrice: 3750, usdPrice: 245 };
  } else if (planProgram === 'nutrition' && planDuration === 12) {
    total = { egpPrice: 6000, usdPrice: 400 };
  }

  /* Follow-up plans logic */

  if (followUpPackage === 'golden-package' && planDuration === 1) {
    total = { egpPrice: total.egpPrice + 600, usdPrice: total.usdPrice + 40 };
  } else if (followUpPackage === 'golden-package' && planDuration === 3) {
    total = { egpPrice: total.egpPrice + 1200, usdPrice: total.usdPrice + 80 };
  } else if (followUpPackage === 'golden-package' && planDuration === 6) {
    total = { egpPrice: total.egpPrice + 2000, usdPrice: total.usdPrice + 135 };
  } else if (followUpPackage === 'golden-package' && planDuration === 12) {
    total = { egpPrice: total.egpPrice + 3200, usdPrice: total.usdPrice + 215 };
  }

  if (followUpPackage === 'mega-package' && planDuration === 1) {
    total = { egpPrice: total.egpPrice + 1500, usdPrice: total.usdPrice + 105 };
  } else if (followUpPackage === 'mega-package' && planDuration === 3) {
    total = { egpPrice: total.egpPrice + 3000, usdPrice: total.usdPrice + 210 };
  } else if (followUpPackage === 'mega-package' && planDuration === 6) {
    total = { egpPrice: total.egpPrice + 5000, usdPrice: total.usdPrice + 350 };
  } else if (followUpPackage === 'mega-package' && planDuration === 12) {
    total = { egpPrice: total.egpPrice + 8000, usdPrice: total.usdPrice + 560 };
  }

  return total;
};

export default customizeUserPlan;
