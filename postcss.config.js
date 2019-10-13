// Load plugins for postcss.
const autoPrefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties')

// All Plugins used in production and development build.
const plugins = [
  autoPrefixer,
  customProperties,
];

module.exports = () => {
  return { plugins };
};
