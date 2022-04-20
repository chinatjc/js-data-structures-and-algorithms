// leetcode - 237

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
const deleteNode = (node: ListNode | null): void => {
  if (!node) return

  const nextItem = node.next

  if (!nextItem) return

  node.val = nextItem.val
  node.next = nextItem.next
}

export {}
