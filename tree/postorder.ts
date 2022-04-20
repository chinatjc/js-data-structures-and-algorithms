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

const postorder = (tree: Tree) => {
  const { value, left, right } = tree
  if (left) postorder(left)
  if (right) postorder(right)
  console.log(value)
}

// 非递归版本
const postorder1 = (tree: Tree) => {
  const stack = [tree]
  const traversedItem: Set<Tree> = new Set()

  while (stack.length) {
    const lastItem = stack[stack.length - 1]

    if (lastItem.left && !traversedItem.has(lastItem.left)) {
      stack.push(lastItem.left)
    } else if (lastItem.right && !traversedItem.has(lastItem.right)) {
      stack.push(lastItem.right)
    } else {
      traversedItem.add(stack.pop()!)
      console.log(lastItem.value)
    }
  }
}

postorder(tree)

console.log('---------')

postorder1(tree)

// export {}
