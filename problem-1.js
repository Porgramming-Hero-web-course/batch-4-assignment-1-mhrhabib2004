"use strict";
function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5]));
// Sample Output:
// 15
