const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const parts = email.split('@');
  if (parts.length === 2) {
    const indexSep = email.indexOf('@');
    const domain = email.slice(indexSep + 1);
    return domain;
  }
  
}

module.exports = {
  getEmailDomain
};
