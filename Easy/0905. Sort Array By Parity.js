var sortArrayByParity = function(nums) {
	let numss = []
	for(let i=0; i<nums.length; i++) {
		if(nums[i] % 2 === 0) numss.unshift(nums[i])
		else numss.push(nums[i])
	}
	return numss
};