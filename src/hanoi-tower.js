const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsSpeedInSeconds = turnsSpeed / 3600;

  const stepsCount = Math.pow(2, disksNumber) - 1;
  const timeNeeded = Math.floor(stepsCount / turnsSpeedInSeconds);
  return {
      turns: stepsCount,
      seconds: timeNeeded
  };
};
