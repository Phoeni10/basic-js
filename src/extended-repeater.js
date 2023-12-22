const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';
  for (let i = 1; i <= options.repeatTimes; i += 1) {
    newStr += str;
    for (let j = 1; j <= options.additionRepeatTimes; j += 1) {
      newStr += options.addition;
      if (j < options.additionRepeatTimes) {
        newStr += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes) {
      newStr += options.separator;
    }
  }
  return newStr;
}

module.exports = {
  repeater
};
