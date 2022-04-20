const list = [5, 4, 3, 2, 1]

const bubbleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length - i; j++) {
      if (list[j - 1] > list[j]) {
        const temp = list[j - 1]
        list[j - 1] = list[j]
        list[j] = temp
      }
    }
  }
}

export {}
