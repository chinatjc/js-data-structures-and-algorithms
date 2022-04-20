// leetcode - 141

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

const hasCycle = (head: ListNode | null): boolean => {
  if (!head) return false

  let p: (ListNode & { _visited?: boolean }) | null = head

  while (p) {
    if (p._visited) return true
    else p._visited = true
    p = p.next
  }

  return false
}

export {}
