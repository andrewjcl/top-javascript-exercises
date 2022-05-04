const ftoc = function(fahrenheit) {
  let result = ((fahrenheit - 32) * (5/9));
  if (result % 1 == 0) {
    return parseInt(result);
  }
  return parseFloat(result.toFixed(1));
};

const ctof = function(celsius) {
  let result = ((celsius * (9/5)) + 32);
  if (result % 1 == 0) {
    return parseInt(result);
  }

  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
