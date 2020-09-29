const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {debugger;
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const result = [];
  let i = 0;

  let isPrevDiscarded = false;

  while(i < arr.length){
    const currentValue = arr[i];

    if (typeof currentValue === 'string') {
      switch(currentValue){
        case '--discard-next':
          i++;
          isPrevDiscarded = true;
          break;
        
        case '--discard-prev':
          if(!isPrevDiscarded) {
            result.pop();
          }
          isPrevDiscarded = false;

          break;
        
        case '--double-next':
          if(arr.length > i + 1) {
            result.push(arr[i + 1]);
          }
          isPrevDiscarded = false;

          break;
        
        case '--double-prev':
          if(i - 1 >= 0 && !isPrevDiscarded) {
            result.push(arr[i - 1]);
          }
          isPrevDiscarded = false;

          break;
        
          default:
            result.push(currentValue);
            isPrevDiscarded = false;
            break;
      }
    } else {
      result.push(currentValue);
      isPrevDiscarded = false;
    }
    
    i++;
  }

  return result;
};
