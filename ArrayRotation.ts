// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 2

// Output: [5, 6, 7, 1, 2, 3, 4]

// Explanation:
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]

class ArrayUtil {

    rotateLeft(a: number[], k: number): number[] {
        let b = [];
        while (k-- > 0) { // -- checks if k is greater than 0 if not, then enters loop, then subtracts after the loop
            b.push(a[a.length - 1]);
            a.pop();
        }
        return b.concat(a);
    }

    
    rotateRight(a: number[], k: number): number[] {
        while (k-- > 0) {  // -- checks if k is greater than 0 if not, then enters loop, then subtracts after the loop
            a.push(a.shift());  // shifts and pushed in one array
        }
        return a  // return the a value
    }
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('Before Rotation to the start')
console.log(a)
let au = new ArrayUtil();
console.log('After Rotation to the start (2 rotations)')
let value = au.rotateLeft(a, 2);
console.log(value);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log('Before Rotation to the end')
console.log(arr)
let val = au.rotateRight(a, 2);
console.log('After Rotation to the end (2 rotations)')
console.log(val);