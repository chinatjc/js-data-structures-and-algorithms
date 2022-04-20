// leetCode - 417

/*
 * 1. 分别建立流入相应海洋的坐标集合
 * 2. 从海岸线的坐标开始 '逆流而上' 深度遍历图，过程中填充相应的海洋坐标集合
 * 3. 取两个海洋坐标集合的交集
 */

const pacificAtlantic = (heights: number[][]): number[][] => {
  const result: number[][] = []

  const m = heights.length
  const n = heights[0].length

  const toPacSet: Set<string> = new Set()
  const toAtlSet: Set<string> = new Set()

  const dfs = (heightsSet: Set<string>, r: number, c: number) => {
    heightsSet.add(`${r}-${c}`)
    ;[
      [r - 1, c],
      [r, c + 1],
      [r + 1, c],
      [r, c - 1]
    ].forEach(([nr, nc]) => {
      if (
        // 确保在矩阵范围内
        0 <= nr &&
        0 <= nc &&
        nr < m &&
        nc < n &&
        // 符合逆流的条件
        heights[nr][nc] >= heights[r][c] &&
        // 避免重复遍历
        !heightsSet.has(`${nr}-${nc}`)
      ) {
        dfs(heightsSet, nr, nc)
      }
    })
  }

  for (let r = 0; r < m; r++) {
    dfs(toPacSet, r, 0)
    dfs(toAtlSet, r, n - 1)
  }
  for (let c = 0; c < n; c++) {
    dfs(toPacSet, 0, c)
    dfs(toAtlSet, m - 1, c)
  }

  for (let index of toPacSet) {
    if (toAtlSet.has(index)) result.push(index.split('-').map((c) => +c))
  }

  return result
}

const result = pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
])

export {}
