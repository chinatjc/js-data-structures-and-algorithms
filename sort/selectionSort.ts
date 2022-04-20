const list = [5, 4, 3, 2, 1]

const selectionSort = (list: number[]) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minValueIndex = i

    for (let j = i + 1; j < list.length; j++) {
      if (list[minValueIndex] > list[j]) {
        minValueIndex = j
      }
    }

    if (minValueIndex !== i) {
      const temp = list[i]
      list[i] = list[minValueIndex]
      list[minValueIndex] = temp
    }
  }
}

export {}
