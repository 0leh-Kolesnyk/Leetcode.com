/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) return false;
    let z = x;
    let y = 0;
    while (z) {
        y = z % 10 + y * 10;
        z = Math.floor(z / 10)
    }
    return x === y;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
