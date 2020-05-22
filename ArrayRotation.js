// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 2
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation:
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.prototype.rotateLeft = function (a, k) {
        var b = [];
        while (k-- > 0) { // -- checks if k is greater than 0 if not, then enters loop, then subtracts after the loop
            b.push(a[a.length - 1]);
            a.pop();
        }
        return b.concat(a);
    };
    ArrayUtil.prototype.rotateRight = function (a, k) {
        while (k-- > 0) { // -- checks if k is greater than 0 if not, then enters loop, then subtracts after the loop
            a.push(a.shift()); // shifts and pushed in one array
        }
        return a; // return the a value
    };
    return ArrayUtil;
}());
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('Before Rotation to the start');
console.log(a);
var au = new ArrayUtil();
console.log('After Rotation to the start (2 rotations)');
var value = au.rotateLeft(a, 2);
console.log(value);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('Before Rotation to the end');
console.log(arr);
var val = au.rotateRight(a, 2);
console.log('After Rotation to the end (2 rotations)');
console.log(val);
