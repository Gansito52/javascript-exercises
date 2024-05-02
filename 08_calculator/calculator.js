const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  }

  else {
    let arr_sum = 0
    for (i = 0; i < array.length; i++) {
      arr_sum = arr_sum + array[i];
    };
    return arr_sum;
  };
};

const multiply = function(arr) {
  let product = 1;
  for (i = 0; i < arr.length; i++) {
    product = product*arr[i];
  };
  return product;
};

const power = function(a, b) {
  let product = 1;
	for (i = 0; i < b; i++) {
    product = product*a;
  };
  return product;
};

const factorial = function(a) {
  let product = 1;

  for (i = a; i > 0; i--) {
    product = product*i;
  };

  return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
