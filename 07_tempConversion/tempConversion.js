const convertToCelsius = function(num) {
  far = (num-32)*(5/9);
  return parseFloat(far.toFixed(1));
};

const convertToFahrenheit = function(num) {
  cel = num*(9/5)+32;
  return parseFloat(cel.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
