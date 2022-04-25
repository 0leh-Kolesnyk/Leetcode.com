// // /**
// //  * @param {string} s
// //  * @return {number}
// //  */
//
//
// let romanToInt = function (s) {
//     // debugger
//     let array = s.split('');
//     // console.log(array);
//     let romanNumber = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] === 'I' && array[i + 1] === 'V') {
//             romanNumber += 4;
//             ++i;
//             continue;
//         }
//         if (array[i] === 'I' && array[i + 1] === 'X') {
//             romanNumber += 9
//             ++i;
//             continue;
//         }
//         if (array[i] === 'I' && array[i + 1] !== 'V' && array[i + 1] !== 'X') romanNumber += 1
//         if (array[i] === 'X' && array[i + 1] === 'L') {
//             romanNumber += 40;
//             ++i;
//             continue;
//         }
//         if (array[i] === 'X' && array[i + 1] === 'C') {
//             romanNumber += 90;
//             ++i;
//             continue;
//         }
//         if (array[i] === 'X' && array[i + 1] !== 'L' && array[i + 1] !== 'C') romanNumber += 10
//         if (array[i] === 'C' && array[i + 1] === 'D') {
//             romanNumber += 400;
//             ++i;
//             continue;
//         }
//         if (array[i] === 'C' && array[i + 1] === 'M') {
//             romanNumber += 900;
//             ++i;
//             continue;
//         }
//         if (array[i] === 'C' && array[i + 1] !== 'D' && array[i + 1] !== 'M') romanNumber += 100
//         if (array[i] === 'V') romanNumber += 5;
//         if (array[i] === 'L') romanNumber += 50;
//         if (array[i] === 'D') romanNumber += 500;
//         if (array[i] === 'M') romanNumber += 1000;
//
//     }
//     return romanNumber;
// };
//

const romanNum = new Map();
romanNum.set('I', 1)
romanNum.set('V', 5)
romanNum.set('X', 10)
romanNum.set('L', 50)
romanNum.set('C', 100)
romanNum.set('D', 500)
romanNum.set('M', 1000)

let romanToInt = function (s) {
    let counter = 0;
    for (let i = 0; i < s.length; ++i) {
        if (i + 1 !== s.length && romanNum.get(s[i]) < romanNum.get(s[i + 1])) {
            counter -= romanNum.get(s[i])
        } else {
            counter += romanNum.get(s[i])
        }
    }
    return counter;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));



