// leet-code - 21

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const nNode = new ListNode(0)
  let p: ListNode = nNode
  let p1: ListNode | null = list1
  let p2: ListNode | null = list2

  while (p1 || p2) {
    if ((p1 && p2 && p1.val < p2.val) || (p1 && !p2)) {
      p.next = new ListNode(p1.val)
      p1 = p1.next
    } else if ((p1 && p2 && p1.val >= p2.val) || (!p1 && p2)) {
      p.next = new ListNode(p2.val)
      p2 = p2.next
    }

    p = p.next!
  }

  return nNode.next
}

export {}
