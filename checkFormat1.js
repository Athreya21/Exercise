"use strict";
"--fix";

let result, rhs = 0, lhs = 0;
let s = "Holy smokes, Fermat was wrong!";
let f = "No, that doesn’t work.";
function checkFermat(a, b, c, n) {
    if (n > 2 && (Theorem(a, b, c, n))) {
        console.log(s);
    } else {
        console.log(f);
    }
}
function Theorem(a, b, c, n) {
    lhs = power(a, n) + power(b, n);
    rhs = power(c, n);
    console.log(lhs, rhs);
    if (lhs === rhs) {
        return true;
    }
}

function power(x, n) {
    if (n == 0) {
        result = 1;
        return result;
    } else {
        result = x * power(x, n - 1);
        return result;
    }
}
checkFermat(2, 2, 2, 2);