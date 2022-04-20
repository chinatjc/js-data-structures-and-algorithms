const list = [5, 4, 3, 2, 1]

const quickSort = (list: number[]): number[] => {
  if (list.length < 2) return list

  const markItem = list[0]

  let [left, right] = list.reduce(
    (sList, item, i) => {
      const [left, right] = sList
      if (i) (item < markItem ? left : right).push(item)
      return sList
    },
    [[], []] as number[][]
  )

  return [...quickSort(left), markItem, ...quickSort(right)]
}

export {}
