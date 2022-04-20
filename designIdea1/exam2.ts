// leetcode - 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
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

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p === q) return true

  return (
    isSameTree(p?.left ?? null, q?.left ?? null) &&
    p?.val === q?.val &&
    isSameTree(p?.right ?? null, q?.right ?? null)
  )
}

export {}
