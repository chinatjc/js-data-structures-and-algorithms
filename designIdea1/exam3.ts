// leetcode - 101

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
 * @return {boolean}
 */

// 递归
const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true

  const rec = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left === right && right === null) return true
    return (
      rec(left?.left ?? null, right?.right ?? null) &&
      left?.val === right?.val &&
      rec(left?.right ?? null, right?.left ?? null)
    )
  }

  return rec(root.left, root.right)
}

// 遍历
const isSymmetric1 = (root: TreeNode | null): boolean => {
  if (!root) return true

  let result = true
  let queue = [root.left, root.right]

  while (queue.length) {
    if (queue.every((node) => node === null)) break

    const l = queue.length

    for (let i = 0; i < l / 2; i++) {
      if (queue[i]?.val !== queue[l - 1 - i]?.val) {
        result = false
        break
      }
    }

    if (!result) break

    queue = queue.reduce((queue, node) => {
      queue.push(node?.left ?? null, node?.right ?? null)
      return queue
    }, [] as (TreeNode | null)[])
  }

  return result
}

export {}
