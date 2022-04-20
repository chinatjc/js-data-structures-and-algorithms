// leetcode - 2

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

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (!l1 || !l2) return null
  const newL: ListNode = { val: 0, next: null }

  let p1: ListNode | null = l1
  let p2: ListNode | null = l2
  let p3: ListNode = newL
  let nextValue = 0

  while (p1 || p2 || nextValue) {
    let curItem: ListNode
    let curVal = nextValue + (p1?.val ?? 0) + (p2?.val ?? 0)

    nextValue = curVal > 9 ? 1 : 0
    curVal = nextValue ? curVal % 10 : curVal
    curItem = { val: curVal, next: null }
    p3.next = curItem

    p1 = p1?.next ?? null
    p2 = p2?.next ?? null
    p3 = p3.next
  }

  return newL.next
}

export {}
