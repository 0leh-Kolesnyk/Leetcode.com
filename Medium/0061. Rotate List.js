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
// const argument = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

//Input: head = [0,1,2], k = 4
// Output: [2,0,1]
// const argument = new ListNode(0, new ListNode(1, new ListNode(2)))



var rotateRight = function(head, k) {

    let count = 0
    while (count < k){
        rotate(list, count)
        return list
    }

};