const list = [5, 4, 3, 2, 1]

const insertionSort = (list: number[]) => {
  for (let i = 1; i < list.length; i++) {
    let insertValue = list[i]
    let j = i

    while (j > 0) {
      if (list[j - 1] > insertValue) {
        list[j] = list[j - 1]
      } else {
        break
      }
      j--
    }

    list[j] = insertValue
  }
}

insertionSort(list)

export {}
