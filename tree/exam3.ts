// leetcode - 102

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return []

  const levelOrder: number[][] = []
  const queue: [TreeNode, number][] = [[root, 0]]

  while (queue.length) {
    const [{ val, left, right }, depth] = queue.shift()!

    levelOrder[depth] = levelOrder[depth] || []
    levelOrder[depth].push(val)

    if (left) queue.push([left, depth + 1])
    if (right) queue.push([right, depth + 1])
  }

  return levelOrder
}

const levelOrder1 = (root: TreeNode | null): number[][] => {
  if (!root) return []

  const levelOrder: number[][] = []
  const queue = [root]

  while (queue.length) {
    let len = queue.length
    levelOrder.push([])

    while (len--) {
      const { val, left, right } = queue.shift()!
      levelOrder[levelOrder.length - 1].push(val)
      if (left) queue.push(left)
      if (right) queue.push(right)
    }
  }

  return levelOrder
}

export {}
