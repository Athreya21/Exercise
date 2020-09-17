"use strict";
"--fix";

function power(x, n) {
    let result;
    if (n === 0) {
        result = 1;
    } else
        result = x * power(x, n - 1);
    return result;
}

console.log(power(2, 2));