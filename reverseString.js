"use strict";
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    const n = Math.floor(s.length / 2);
    let i = 0;
    while (i < n) {
        let ret;
        ret = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = ret;
        i = i + 1;
    }
}
;
