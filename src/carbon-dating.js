const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  let x = parseFloat(sampleActivity);

  return !isNaN(x) && x > 0 && x <= 15 ? Math.ceil(Math.log(MODERN_ACTIVITY / x) / 0.693 * HALF_LIFE_PERIOD) : false;
};
