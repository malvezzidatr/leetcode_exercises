/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    return convertListToNumber(l1, l2)
};

const convertListToNumber = (l1, l2) => {
    let dummyHead = new ListNode()
    let current = dummyHead;
    let total = 0;
    let carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummyHead.next = new ListNode(num);
        dummyHead = dummyHead.next;
    }

    return current.next
}

// This is the correct anwser about this exercise, the other one I don't knew what is linked list, so I just converted linked list and solved the issue, but,
// with this one, I solved the issue using linked list.