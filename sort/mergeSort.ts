const list = [5, 4, 3, 2, 1]

const mergeSort0 = (list: number[]) => {
  // 分
  let res: number[][] = list.map((num) => [num])

  // 合
  while (res.length > 1) {
    const nRes: number[][] = []

    // 每两个子数组合并为一个子数组
    for (let i = 0; i < res.length; i = i + 2) {
      const nSubList: number[] = []
      const subList0: number[] = res[i]
      const subList1: number[] = res[i + 1] || []

      // 合并过程中的数值比较逻辑
      while (subList0.length || subList1.length) {
        if (subList0.length && subList1.length) {
          nSubList.push(
            subList0[0] < subList1[0] ? subList0.shift()! : subList1.shift()!
          )
        } else if (subList0.length) {
          nSubList.push(subList0.shift()!)
        } else if (subList1.length) {
          nSubList.push(subList1.shift()!)
        }
      }

      nRes.push(nSubList)
    }

    res = nRes
  }

  return res[1]
}

const mergeSort = (list: number[]): number[] => {
  if (list.length < 2) return list

  const mid = Math.floor(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid, list.length)
  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)
  const sortList: number[] = []

  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      sortList.push(
        orderLeft[0] < orderRight[0] ? orderLeft.shift()! : orderRight.shift()!
      )
    } else if (orderLeft.length) {
      sortList.push(orderLeft.shift()!)
    } else if (orderRight.length) {
      sortList.push(orderRight.shift()!)
    }
  }

  return sortList
}

export {}
