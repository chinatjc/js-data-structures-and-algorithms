import * as MinHeap from './minHeap.js'

type Item = { val: number; next: ListNode | null }

class NodeMinHeap extends MinHeap.default<Item> {
  constructor() {
    super()
  }
  getItemValue(item: Item) {
    return item?.val ?? NaN
  }
}

// leetcode - 23

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

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  if (!lists.length) return null

  const h = new NodeMinHeap()
  const nNode = new ListNode(0)
  let p = nNode

  lists.forEach((node) => {
    if (node) {
      let p: ListNode | null = node
      while (p) {
        h.insert(p)
        p = p.next
      }
    }
  })

  while (h.size()) {
    const node = h.heap[0]
    node.next = null

    p.next = node
    p = p.next

    h.pop()
  }

  return nNode.next
}

mergeKLists([
  {
    val: -2,
    next: { val: -1, next: { val: -1, next: { val: -1, next: null } } }
  }
  // { val: 1, next: { val: 4, next: { val: 5, next: null } } },
  // { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  // { val: 2, next: { val: 6, next: null } }
])

export {}
