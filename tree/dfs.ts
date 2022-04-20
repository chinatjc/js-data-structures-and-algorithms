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

const dfs = (tree: Tree) => {
  console.log(tree.value)
  tree.children.forEach((tree) => dfs(tree))
}

dfs(tree)

export {}
