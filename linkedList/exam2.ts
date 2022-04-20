// leetcode - 206

/**
 * Definition for singly-linked list.
 */
interface ListNode {
  val: number
  next: ListNode | null
}

const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head) return null

  let p1: ListNode | null = head
  let p2: ListNode | null = null

  while (p1) {
    const p1Next: ListNode | null = p1.next

    p1.next = p2
    p2 = p1
    p1 = p1Next
  }

  return p2
}
