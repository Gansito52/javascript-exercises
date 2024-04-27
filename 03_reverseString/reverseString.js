const reverseString = function(string) {
    splitString = string.split('');
    reverse = ''
    for (i = string.length - 1; i >= 0; i--) {
        reverse += splitString[i]
    };
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
