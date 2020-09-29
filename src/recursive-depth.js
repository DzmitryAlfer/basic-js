const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, currentDepth = 1) {
    const arrayWithInnerArrays = arr.filter(x => Array.isArray(x));
    
     return arrayWithInnerArrays.length === 0 
              ? currentDepth
              : Math.max(...arrayWithInnerArrays.map(x => this.calculateDepth(x, currentDepth + 1)));
  }
};