type Graph = {
  [k: string]: number[]
}

const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const bfs = (graph: Graph, nodeKey: number) => {
  const visitedNodeKey: Set<number> = new Set()
  const queue = [nodeKey]

  while (queue.length) {
    const nodeKey = queue.shift()!
    console.log(nodeKey)
    visitedNodeKey.add(nodeKey)

    graph[nodeKey]?.forEach((nodeKey) => {
      if (!visitedNodeKey.has(nodeKey)) queue.push(nodeKey)
    })
  }
}

bfs(graph, 2)

export {}
