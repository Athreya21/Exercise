"use strict";

function oddSum(n) {
    if (n % 2 === 1) {
        return n == 1
            ? 1
            : n + oddSum(n - 2);
    } else {
        n--;
        return n == 1
            ? 1
            : n + oddSum(n - 2);
    }
}

console.log(oddSum(8));