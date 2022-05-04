/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// let nums = [1, 2, 3, 4]
// const k = 5
// 2

let nums = [3,1,3,4,3]
const k = 6
// 1

var maxOperations = function (nums, k) {
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === k) {
				nums.splice(j, 1)
				nums.splice(i, 1)
				count++
				i--
				break
			}
		}
	}
	return count
};

console.log(maxOperations(nums, k))