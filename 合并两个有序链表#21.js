/**
 * Definition for singly-linked list.
 * 
 */
function ListNode(val) {
    this.val = val
    this.next = null
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 暴力解法
function mergeTwoLists (l1, l2) {
    if (l1 !== null && l2 !== null) {
        for (let pointer2 = l2; pointer2 !== null; pointer2 = pointer2.next) {
            let targetNode = new ListNode(pointer2.val)
            for (let pointer1 = l1; pointer1 !== null; pointer1 = pointer1.next) {
                if (targetNode.val >= pointer1.val && (pointer1.next ? (targetNode.val < pointer1.next.val) : (pointer1.next === null))) {
                    targetNode.next = pointer1.next
                    pointer1.next = targetNode
                    break
                }
                if (targetNode.val < pointer1.val) {
                    targetNode.next = pointer1
                    pointer1 = targetNode
                    l1 = pointer1
                    break
                }
            }
        }
        return l1
    } else if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }
}

// 递归法
function mergeTwoListsByRecurse (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoListsByRecurse(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoListsByRecurse(l1, l2.next)
        return l2
    }
}

// 迭代法
function mergeTwoListsByIterate (l1, l2) {
    let prehead = new ListNode(-1)
    let prev = prehead
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }

    prev.next = l1 === null ? l2 : l1
    
    return prehead.next
}


function array2SingleList (arrayData) {
    if (arrayData.length) {
        let singleList = null
        let pointer
        for (item of arrayData) {
            if (singleList === null) {
                singleList = new ListNode(item)
                pointer = singleList
            } else {
                pointer.next = new ListNode(item)
                pointer = pointer.next
            }
        }
        return singleList
    } else{
        return null
    }
}
function singleList2Array (listNode) {
    let resultArray = []
    if (listNode !== null) {
        for (let pointer = listNode; pointer !== null; pointer=pointer.next) {
            resultArray.push(pointer.val)
        }
    }
    return resultArray
}
let testl1 = array2SingleList([1, 3, 7])
let testl2 = array2SingleList([2, 3, 4, 5])

console.time('run')
let result = mergeTwoListsByIterate(testl1, testl2)
console.log(singleList2Array(result))
console.timeEnd('run')