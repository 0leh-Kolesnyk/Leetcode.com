// function arrToRevNum(arr) {
//     let num = 0
//     for (let i = 0; i < arr.length; i++) {
//         num = num + arr[i] * Math.pow(10, i)
//     }
//     return num
// }
//
// function numToRevArr(num) {
//     if(num===0) return [0]
//     let arr = []
//     while (num > 0) {
//         arr.push(num % 10)
//         num = Math.floor(num / 10)
//     }
//     return arr
// }
//
// function addTwoNumbers(l1, l2) {
//     let sumNum = arrToRevNum(l1) + arrToRevNum(l2)
//     return numToRevArr(sumNum)
// }
//
// console.log(addTwoNumbers([0], [0]))



/**
 * Definition for singly-linked list.

 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function linkedListToNum(list) {
    let num = "";
    let tempList = list;

    // tempList && tempList.val
    while (tempList?.val) {
        num = tempList.val.toString() + num;
        tempList = tempList.next;
    }

    return Number(num);
}

const argL1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const argL2 = new ListNode(5, new ListNode(6, new ListNode(4)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const num = linkedListToNum(l1);
    const num2 = linkedListToNum(l2);

    const result = num + num2;
};

addTwoNumbers(argL1, argL2);