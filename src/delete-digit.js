const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  let arr = String(n);
  
  for (let i = 0; i < arr.length; i++) {
    
    let newArr = [...arr];
    newArr.splice(i,1);
    newNum = newArr.join('')
   
    if (newNum > maxNum) {
      maxNum = newNum;

    }
    

  }
  return +maxNum;
}


module.exports = {
  deleteDigit
};
