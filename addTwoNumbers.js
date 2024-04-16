let addTwoNumbers = function(l1, l2) {
    const arr1 = convertToArrayAndReverse(l1);
    const arr2 = convertToArrayAndReverse(l2);

    const arrWithAnswer = (BigInt(arr1.join('')) + BigInt(arr2.join(''))).toString().split('').reverse();

    let linkedList = buildNewLinkedList(arrWithAnswer);

    return linkedList;
};

let buildNewLinkedList = function(arr) {
    let linkedList = new ListNode();
    let current = linkedList;

    for(let i = 0; i <= arr.length - 1; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return linkedList.next;
}

let convertToArrayAndReverse = function(linkedList) {
    return convertLinkedListToArray(linkedList).reverse();
}

let convertLinkedListToArray = function(linkedList) {
    let current = linkedList;
    const arr = [];

    while(current) {
        arr.push(Number(current.val || 0));
        current = current.next;
    }


    return arr;
}