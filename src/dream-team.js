const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }
  
  return members
    .filter(x => typeof x === 'string')
    .map(x => x.trim())
    .filter(x => x.length > 0)
    .map(x => [0].toUpperCase())
    .sort()
    .join('');
};
