// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// Для заданной строки s вернуть true, если s может быть палиндромом после удаления из нее не более одного символа.
//
// Example 1:
// Input: s = "aba"
// Output: true
//
// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
//
// Example 3:
// Input: s = "abc"
// Output: false
//
// Constraints: // ОГРАНИЧЕНИЯ
// 1 <= s.length <= 105
// s consists of lowercase English letters.

//1-й способ
// var validPalindrome = function (s) {
//     debugger
//     let index
//     let result1, result2
//     let flag1 = true
//     let flag2 = true
//     let s1 = s
//     let s2 = s
//     for (let i = 0; i <= s.length / 2; i++) {
//
//         let first = s1[i]
//         let last = s1[s1.length - (1 + i)]
//         if (first !== last) {
//             if (flag1 !== true) {
//                 result1 = false
//                 break
//             } else {
//                 flag1 = false;
//                 index = i;
//                 s1 = s1.slice(0, s1.length - (1 + i)) + s1.slice(s1.length - i)
//                 i = i - 1
//                 console.log(s1)
//             }
//         }
//         result1 = true
//     }
//     console.log('result1 = ', result1)
//
//     for (let i = index; i <= s.length / 2; i++) {
//         let first = s2[i]
//         let last = s2[s2.length - (1 + i)]
//         if (first !== last) {
//             if (flag2 !== true) {
//                 result2 = false
//                 break
//             } else {
//                 flag2 = false;
//                 s2 = s2.slice(0, i) + s2.slice(i + 1)
//                 i = i - 1//16/17
//                 console.log(s2)
//             }
//         }
//         result2 = true
//     }
//     console.log('result2 = ', result2)
//
//     return result1 === true || result2 === true;
// }

// 2-й способ - no work
// var validPalindrome = function (s) {
//     debugger
//     let flag = true
//     for (let i = 0; i <= s.length / 2; i++) {
//         let first = s[i]
//         let last = s[s.length - (1 + i)]
//         if (first !== last) {
//             if (flag !== true) return false // 'ebcbb e cecabbacec bbcbe'
//             else {
//                 flag = false;
//                 if (first === s[s.length - (2 + i)]) {
//                     s = s.slice(0, s.length - (1 + i)) + s.slice(s.length - i)
//                     i = i - 1
//                     console.log(s)
//                 } else {
//                     if (last === s[i + 1]) {
//                         s = s.slice(0, i) + s.slice(i + 1)
//                         i = i - 1
//                         console.log(s)
//                     } else return false
//                 }
//             }
//         }
//     }
//     return true;
// };

// Ni
const checkPalindrome = (
    string,
    startIndex,
    endIndex
) => {
    while (startIndex < endIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return false;
        }
        startIndex += 1;
        endIndex -= 1;
    }
    return true;
};

const validPalindrome = (string) => {
    let startIndex = 0;
    let endIndex = string.length - 1;
    while (startIndex < endIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return (
                checkPalindrome(string, startIndex, endIndex - 1) ||
                checkPalindrome(string, startIndex + 1, endIndex)
            );
        }

        startIndex += 1;
        endIndex -= 1;
    }
    return true;
};


// "macccc"

console.log(validPalindrome('macccc'))
console.log(validPalindrome('ebcbb ececabbacec bbcbe'))
// console.log(validPalindrome('madam'))
// console.log(validPalindrome('level'))
// console.log(validPalindrome('acboucccuoba'))
// console.log(validPalindrome('abc'))
// console.log(validPalindrome('aba'))
// console.log(validPalindrome("axbcbaba"))
