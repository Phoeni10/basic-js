const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const lambda = Math.log(2) / HALF_LIFE_PERIOD;
  if (typeof Number.parseFloat(sampleActivity) === 'number' && !isNaN(sampleActivity)) {
    const age = 1 / lambda * Math.log(MODERN_ACTIVITY / sampleActivity);
    return Math.ceil(age);
  }
  return false;
}

module.exports = {
  dateSample
};
