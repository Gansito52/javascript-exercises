const sumAll = function(a, b) {
    let array = [a, b];
    if ((Number.isInteger(a) && a > 0) && (Number.isInteger(b) && b > 0)) {
        let arr = array.toSorted();
        let sum = 0;
        a = arr[0];
        b = arr[1];
        for (a; b >= a; b--) {
            sum = sum + b;
        }
        return sum;
    }
    
    else {
        return 'ERROR'
    };
};

// Do not edit below this line
module.exports = sumAll;
