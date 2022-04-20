interface Tree {
  value: string
  children: Tree[]
}

const tree: Tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
          children: []
        },
        {
          value: 'e',
          children: []
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f',
          children: []
        },
        {
          value: 'g',
          children: []
        }
      ]
    }
  ]
}

const bfs = (tree: Tree) => {
  const queue = [tree]
  while (queue.length) {
    const item = queue.shift()!
    console.log(item.value)
    item.children.forEach((tree) => {
      queue.push(tree)
    })
  }
}

bfs(tree)

export {}
