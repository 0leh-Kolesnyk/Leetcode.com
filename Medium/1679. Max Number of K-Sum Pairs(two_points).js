/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let numbs = [1, 3, 4, 2]
const k = 5
// 2

// let nums = [3,1,3,4,3]
// const k = 6
// // 1
//
// var maxOperations = function (nums, k) {
// nums.sort(sortAscending)
// 	let count = 0
//
//
// 	return count
// }
//
// function sortAscending(a, b) {
// 	return a - b // по возрастанию
// }
//
// console.log(maxOperations(nums, k))



function maxOperations(numbs, k) {
	const hashTable = {};
	let answer = 0;

	
	for (let i of numbs) {
		if (hashTable[k - i] && hashTable[k - i] > 0) {
			answer += 1;
			hashTable[k - i] -= 1;
		} else if (!hashTable[i]) {
			hashTable[i] = 1;
		} else {
			hashTable[i] += 1;
		}
	}
	
	return answer;
}

// haseTable{ key-und: val-und}

console.log(maxOperations(numbs, k))