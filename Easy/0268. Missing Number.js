// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Учитывая массив nums, содержащий n различных чисел в диапазоне [0, n],
// вернуть единственное число в диапазоне, отсутствующее в массиве. Example 1:
//
// nums = [3,0,1]
// Output: 2
//
// Input: nums = [0,1]
// Output: 2
//
nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
//
// Constraints:
//
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let controlArray = nums.length*(nums.length+1)/2
	let sumNums = 0
	for (let i in nums) {
		sumNums = sumNums + nums[i]
	}
	return controlArray - sumNums
};

console.log(missingNumber(nums))