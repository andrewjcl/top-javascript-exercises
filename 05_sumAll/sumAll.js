const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || num1 < 0)
        return "ERROR";

    if (!Number.isInteger(num2) || num2 < 0)
        return "ERROR";

    let sum = 0;
    let first;
    let last;

    if (num1 > num2) {
        first = num2;
        last = num1;
    } else {
        first = num1;
        last = num2;
    }

    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
