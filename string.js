"use strict";

let s = new String("hi"), i = 0, j = new String();
console.log(s.length);
function rightJustify(s) {
    while (i < (70 - s.length)) {
        j = j + " ";
        i++;
    }
} rightJustify(s);
console.log(j + s);

