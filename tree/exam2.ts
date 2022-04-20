// leetcode - 111

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

const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0

  const queue: [TreeNode, number][] = [[root, 0]]

  while (queue.length) {
    let [item, depth] = queue.shift()!

    depth++

    if (!item.left && !item.right) return depth
    if (item.left) queue.push([item.left, depth])
    if (item.right) queue.push([item.right, depth])
  }

  return Infinity
}

export {}
