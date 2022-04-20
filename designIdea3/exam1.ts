// leetcode - 455

const findContentChildren = (g: number[], s: number[]): number => {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let sum = 0
  let firstSIndex = 0

  for (let i = 0; i < g.length; i++) {
    for (let j = firstSIndex; j < s.length; j++) {
      if (s[j] >= g[i]) {
        sum++
        firstSIndex = j + 1
        break
      }
    }
  }

  return sum
}

export {}
