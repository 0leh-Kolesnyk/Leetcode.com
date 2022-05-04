/**
 * @param {number[]} nums
 * @return {number}
 */

// const nums = [1,2,3,4]
// 0

// const nums = [1]
// 0

// const nums = [2, 6, 4, 8, 10, 9, 15]
// 5


// const nums = [1,3,2,4,5]
// 2

// const nums = [2,3,3,2,4]
// 3


// const nums = [3, 2, 3, 2, 4]
// 4

var findUnsortedSubarray = function (nums) {
	if (nums.length === 1) return 0
	let indexSubArrayMin = 0
	let indexSubArrayMax = 0
	let numsCopy = nums.slice()
	
	function compareNumbers(a, b) {
		return a - b
	}
	
	numsCopy.sort(compareNumbers)
	console.log(nums)
	console.log(numsCopy)
	for (let i = 0; i < nums.length; i++) {
		if(nums[i]===numsCopy[i]) continue
		else {
			indexSubArrayMin = i
			break
		}
	}
	
	for(let i=nums.length-1; i>=0; i--){
		if(nums[i]===numsCopy[i]) continue
		else {
			indexSubArrayMax = i
			break
		}
	}
	
	if (indexSubArrayMin !== indexSubArrayMax) {
		let lengthSubArray = indexSubArrayMax - indexSubArrayMin + 1
		return lengthSubArray
	} else {
		return 0
	}
	
};

console.log(findUnsortedSubarray(nums))