/*
* 整数反转
链接：https://leetcode-cn.com/problems/reverse-integer
* */
function reverse(x) {
    var max = Math.pow(2, 31) - 1;
    var maxLimit = Math.floor(max / 10);
    var i = x, result = 0;
    while (i != 0) {
        if (result > maxLimit || result < 0 - maxLimit) {
            return 0;
        }
        if (result === maxLimit && (i % 10 > max % 10)) {
            return 0;
        }
        if (result === 0 - maxLimit && (i % 10 < (0 - (max % 10 + 1)))) {
            return 0;
        }
        result = result * 10 + i % 10;
        if (x < 0) {
            i = 0 - Math.floor(Math.abs(i) / 10);
        }
        else {
            i = Math.floor(i / 10);
        }
    }
    return result;
}
;
