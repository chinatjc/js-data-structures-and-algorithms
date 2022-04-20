// leetcode - 226

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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) return root

  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
}

export {}
