// leetCode - 133

/*
 * 1. 拷贝节点
 * 2. 遍历图的过程中，连接拷贝节点
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

const cloneGraph = (node: Node | null): Node | null => {
  if (!node) return node

  const visited: Map<Node, Node> = new Map()

  // ---------- bfs 方法 -----------

  const bfs = (node: Node) => {
    const queue = [node]
    visited.set(node, new Node(node.val))

    while (queue.length) {
      const node = queue.shift()!
      const cNode = visited.get(node)!

      node.neighbors.forEach((eNode) => {
        if (!visited.has(eNode)) {
          queue.push(eNode)
          visited.set(eNode, new Node(eNode.val))
        }
        cNode.neighbors.push(visited.get(eNode)!)
      })
    }
  }

  bfs(node)

  // ---------- dfs 方法 -----------

  // const dfs = (node: Node) => {
  //   const cNode = new Node(node.val)
  //   visited.set(node, cNode)

  //   node.neighbors.forEach((eNode) => {
  //     if (!visited.has(eNode)) {
  //       dfs(eNode)
  //     }
  //     cNode.neighbors.push(visited.get(eNode)!)
  //   })
  // }

  // dfs(node)

  return visited.get(node)!
}

export {}
