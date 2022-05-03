/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// const argument = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));

//Input: head = [0,1,2], k = 4
// Output: [2,0,1]
// const argument = new ListNode(0, new ListNode(1, new ListNode(2)))
const argument = new ListNode(1, new ListNode(2, new ListNode(3)))
// const argument;

function countNodes(list) {
	let countNode = 2
	while (list.next.next !== null) {
		list = list.next
		countNode++
	}
	return countNode
}

function rotate(list) {
	let headList = list
	let newHeadList = new ListNode()
	while (list.next.next !== null) {
		list = list.next
	}
	newHeadList.val = list.next.val
	newHeadList.next = headList
	list.next = null
	return newHeadList;
}

var rotateRight = function (head, k) {
	if (!head) return head
	if (head.next === null) return head
	let countNode = countNodes(head)
	if (k > countNode) {
		k = k % countNode
	}
	let count = 0
	while (count < k) {
		head = rotate(head)
		count++
	}
	console.log(head)
	console.log('countNode = ', countNode)
	console.log('k = ', k)
	return head
};

// console.log(argument.next.next)
rotateRight(argument, 2000000000)
// rotate(argument)
// countNodes(argument, 0)
//