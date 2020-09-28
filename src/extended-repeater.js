const defaultOptions = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|' };

module.exports = function repeater( str, options = defaultOptions) {
  const val = String(str);

  options = {...defaultOptions, ...options};

  const fullAddition = Array.from(Array(options.additionRepeatTimes), () => String(options.addition)).join(options.additionSeparator);
  return Array.from(Array(options.repeatTimes), () => str + fullAddition).join(options.separator);
};
  