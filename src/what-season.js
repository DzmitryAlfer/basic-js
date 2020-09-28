const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || date.getMonth !== (new Date()).getMonth) {
    throw new Error('INVALID');
  }

  const monthNum = date.getMonth() + 1;

  return (1 <= monthNum && monthNum <= 2) || monthNum === 12 ? 'winter' : 
          3 <= monthNum && monthNum <= 5 ? 'spring' :
          6 <= monthNum && monthNum <= 8 ? 'summer' : 'autumn';
};
