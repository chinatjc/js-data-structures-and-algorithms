type Graph = {
  [k: string]: number[]
}

const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const dfs = (
  graph: Graph,
  nodeKey: number,
  visitedNodeKey: Set<number> = new Set()
) => {
  console.log(nodeKey)
  visitedNodeKey.add(nodeKey)

  graph[nodeKey]?.forEach((nodeKey) => {
    if (!visitedNodeKey.has(nodeKey)) dfs(graph, nodeKey, visitedNodeKey)
  })
}

dfs(graph, 2)

export {}
