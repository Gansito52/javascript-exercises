const removeFromArray = function(array, ...args) {
    for (i = 0; i < args.length; i++) {
        for (j = 0; j < array.length; j++){
            if (args[i] === array[j]) {
                if (array[j+1] === array[j]){
                    array.splice(j+1, 1)
                }
                array.splice(j, 1)
            };
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
