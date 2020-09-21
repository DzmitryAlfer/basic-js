const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!matrix) {
    return 0;
  }

  return matrix.reduce((acc, val) => {
    return acc + val.filter(x => x === '^^').length;
  }, 0);
};
