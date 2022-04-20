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

const preorder = (tree: Tree) => {
  console.log(tree.value)
  if (tree.left) preorder(tree.left)
  if (tree.right) preorder(tree.right)
}

// 非递归版本
const preorder1 = (tree: Tree) => {
  const stack: Tree[] = [tree]

  while (stack.length) {
    const item = stack.pop()!
    console.log(item.value)

    if (item.right) stack.push(item.right)
    if (item.left) stack.push(item.left)
  }
}

preorder(tree)

console.log('--------')

preorder1(tree)

export {}
