/**
 * @param {string} digits
 * @return {string[]}
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const hashTableDigits = {
	'2': new ListNode('a', new ListNode('b', new ListNode('c'))),
	'3': new ListNode('d', new ListNode('e', new ListNode('f'))),
	'4': new ListNode('g', new ListNode('h', new ListNode('i'))),
	'5': new ListNode('j', new ListNode('k', new ListNode('l'))),
	'6': new ListNode('m', new ListNode('n', new ListNode('o'))),
	'7': new ListNode('p', new ListNode('q', new ListNode('r', new ListNode('s')))),
	'8': new ListNode('t', new ListNode('u', new ListNode('v'))),
	'9': new ListNode('w', new ListNode('x', new ListNode('y', new ListNode('z'))))
}

var letterCombinations = function (digits) {
	let result = []
	let tmpResult = []
	let tmpString = ''
	let index = 0
	let key = digits[index]
	let tmpList = hashTableDigits[key]
	
	if (digits.length > 4 || digits === '1' || digits === '0') {
		console.log('Errors: digits not valid')
		return undefined
	}
	if (digits === '') return []
	
	while (tmpList) {
		result.push(tmpList.val)
		tmpList = tmpList.next
	}
	
	while (digits.length > index + 1){
		tmpResult = []
		while (result.length > 0) {
			tmpString = result.shift()
			if (index + 1 < digits.length) {
				index++
				key = digits[index]
				tmpList = hashTableDigits[key]
				while (tmpList) {
					tmpResult.push(tmpString + tmpList.val)
					tmpList = tmpList.next
				}
			}
			index--
		}
		result = tmpResult.slice()
		index++
	}
	
	return result
};

console.log(letterCombinations("238"))