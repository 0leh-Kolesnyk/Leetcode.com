class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {number}
 */

// const argL1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const argL2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// const argL1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const argL2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const argL1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const argL2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// const argL1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))));
// const argL2 = new ListNode(5, new ListNode(6, new ListNode(4)));


var addTwoNumbers = function (l1, l2) {

    const resultListHead = new ListNode()

    function summaLinkedList(l1, l2, countTen, resultList) {
        debugger
        let val1 = l1.val
        let val2 = l2.val
        let resultVal = val1 + val2 + countTen

        if (resultVal > 9) {
            countTen = 1
        } else {
            countTen = 0
        }

        resultList.val = resultVal % 10
        l1 = l1.next
        l2 = l2.next
        while (l1 || l2 || countTen !== 0) {
            if (l1 === null) l1 = new ListNode()
            if (l2 === null) l2 = new ListNode()

            resultList.next = new ListNode()
            let newResultList = resultList.next
            summaLinkedList(l1, l2, countTen, newResultList)
            return resultListHead
        }
    }

    summaLinkedList(l1, l2, 0, resultListHead)

    return resultListHead
};

// console.log(summaLinkedList(argL1, argL2, 0, resultListHead))
// console.log(addTwoNumbers(argL1, argL2))
console.dir(addTwoNumbers(argL1, argL2), {depth: null})
