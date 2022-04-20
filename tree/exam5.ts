// leetcode - 112

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

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false

  let hasPathSum = false

  const dfs = (root: TreeNode, sum?: number) => {
    if (hasPathSum) return

    sum = (sum || 0) + root.val

    if (!root.left && !root.right && sum === targetSum) hasPathSum = true
    if (root.left) dfs(root.left, sum)
    if (root.right) dfs(root.right, sum)
  }

  dfs(root)

  return hasPathSum
}

export {}
