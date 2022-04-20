interface Tree {
  value: number
  left: Tree | null
  right: Tree | null
}

const tree: Tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

// 中序遍历

const inorder = (tree: Tree) => {
  if (tree.left) inorder(tree.left)
  console.log(tree.value)
  if (tree.right) inorder(tree.right)
}

// 非递归版本
const inorder1 = (tree: Tree) => {
  const stack = [tree]
  const traversedItem: Set<Tree> = new Set()

  while (stack.length) {
    const lastItem = stack[stack.length - 1]

    if (lastItem.left && !traversedItem.has(lastItem.left))
      stack.push(lastItem.left)
    else {
      traversedItem.add(stack.pop()!)
      console.log(lastItem.value)
      if (lastItem.right) stack.push(lastItem.right)
    }
  }
}

inorder(tree)

console.log('------')

inorder1(tree)

export {}
