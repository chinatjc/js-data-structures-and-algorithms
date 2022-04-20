const list = [5, 4, 3, 2, 1]

const squentailSearch = (list: number[], t: number): number => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === t) return i
  }
  return -1
}

export {}
