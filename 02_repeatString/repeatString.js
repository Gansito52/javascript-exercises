const repeatString = function(string, num) {
    if (num >= 0) {
        new_string = ''
        while (num > 0) {
            new_string += string
            num--;
        }
        return new_string
    }

    else {
        return 'ERROR'
    };
    
};

// Do not edit below this line
module.exports = repeatString;
