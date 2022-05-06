/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Input:
// let s = "abcd"
// const k = 2
// Output: "abcd"

// Input:
let s = "deeeedbbccccbbddaa"
const k = 4
// Output: "aa"

// Input:
// let s = "pbbcggttciiippooaais"
// const k = 2
// Output: "ps"

// function removeElementsString(string, i_indexFirstDelete, k_countDelete) {
// 	let string1 = string.slice(0, i_indexFirstDelete)
// 	let string2 = string.slice(i_indexFirstDelete + k_countDelete)
// 	string = string1 + string2
// 	return string
// }
//
// var removeDuplicates = function (s, k) {
// 	let count = 1
// 	for (let i = 0; i < s.length - 1; i++) {
// 		if (s.charAt(i) !== s.charAt(i + 1)) count = 1
// 		if (s.charAt(i) === s.charAt(i + 1)) {
// 			count += 1
// 			if (count === k) {
// 				s = removeElementsString(s, i - (k - 2), k) // i -
// 				return removeDuplicates(s, k)
// 			}
// 		}
// 	}
// 	return s
// };

var removeDuplicates = function (s, k) {
	let stack = []
	let count = 1
	let flag = true
	
	for (let i in s) {
		if (s[i] === stack[stack.length - 1]) {
			if(flag === true) {
				flag = false
				let j = 1
				while (stack[stack.length - 1] === stack[(stack.length - 1) - j]) {
					j += 1
					count += 1
				}
			}
			count += 1
			stack.push(s[i])
		} else {
			stack.push(s[i])
			count = 1
		}
		if (count === k) {
			stack.splice((stack.length - k), k)
			count = 1
			flag = true
		}
	}
	return stack.join('')
};

console.log(removeDuplicates(s, k))
