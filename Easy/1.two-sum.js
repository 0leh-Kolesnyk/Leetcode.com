/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const twoSum = (nums, target) => {
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i <= nums.length; i++) {
        const diff = target - nums[i] // 7 //2
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i) // [2], 0

    }
}

// const twoSum = (nums, target) => {
//     const map = new Map()
//     for (let i = 0; i <= nums.length; i++) {
//         const diff = target - nums[i]
//     }
// };


console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))


