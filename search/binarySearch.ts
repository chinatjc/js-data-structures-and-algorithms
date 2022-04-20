const list = [5, 4, 3, 2, 1]

// 二分法搜索的前提是 list 为有序数组
const binarySearch = (list: number[], item: number): number => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = list[mid]

    if (element < item) low = mid + 1
    else if (element > item) high = mid - 1
    else return mid
  }

  return -1
}

export {}
