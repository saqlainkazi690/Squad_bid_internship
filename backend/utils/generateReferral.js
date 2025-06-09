const { v4: uuidv4 } = require('uuid');

const generateReferral = () => {
  return uuidv4().split('-')[0]; // short code
};

module.exports = generateReferral;
