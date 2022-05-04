// 20. Valid Parentheses
//
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid
// Дана строка s, содержащая только символы '(', ')', '{', '}', '[' and ']', определить, является ли входная строка допустимой
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets
// Открытые скобки должны быть закрыты однотипными скобками.
// Open brackets must be closed in the correct order
// Открытые скобки должны быть закрыты в правильном порядке.


/**
 * @param {string} s
 * @return {boolean}
 */



function isValid(string) {
    const obj = {')': '(', ']': '[', '}': '{'}
    const openBreackers = Object.values(obj)
    const stackArr = []

    if(string.length % 2 !== 0) return false
    for (let el of string) {
        if (openBreackers.includes(el)) {
            stackArr.push(el)
        } else {
            if (obj[el] === stackArr[stackArr.length - 1]) {
                stackArr.pop()
            } else return false
        }
    }
    return stackArr.length === 0;
}

console.log(isValid("("))
console.log(isValid("()"))
console.log(isValid("{[]}"))
console.log(isValid("{[]}"))
console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))
console.log(isValid("{[]()}"))
console.log(isValid("([}}])"))
console.log(isValid("(]"))
console.log(isValid("([)]"))


//
// const brackets = new Map();
// brackets.set('(', ')')
// brackets.set('[', ']')
// brackets.set('{', '}')
//
//
// let isValid = function (s) {
//
//     console.log(s)
//     let array = s.split('');
//
//     let reductionBrackets = function (array) {
//         if (array.length === 2) { //условие окончания рекурсии
//             return brackets.has(array[0]) && array[1] === brackets.get(array[0]);
//         }
//
//         for (let i = 0; i < array.length; i++) {
//             if (brackets.has(array[i]) && array[i + 1] === brackets.get(array[i]) && array.length > 2) {
//                 array.splice(i, 2);
//                 --i;
//             }
//         }
//         return reductionBrackets(array)
//     }
//     return reductionBrackets(array)
// }


// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("{[]}"))
// console.log(isValid("{[]()}"))
//
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
