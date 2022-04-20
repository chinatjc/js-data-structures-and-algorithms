// leetcode - 94

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

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return []

  const list: number[] = []

  const inorder = (tree: TreeNode) => {
    const stack = [tree]
    const traversedItem: Set<TreeNode> = new Set()

    while (stack.length) {
      const lastItem = stack[stack.length - 1]

      if (lastItem.left && !traversedItem.has(lastItem.left))
        stack.push(lastItem.left)
      else {
        traversedItem.add(stack.pop()!)

        list.push(lastItem.val)
        // console.log(lastItem.val)

        if (lastItem.right) stack.push(lastItem.right)
      }
    }
  }

  inorder(root)

  return list
}

export {}
