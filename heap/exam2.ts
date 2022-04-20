import * as MinHeap from './minHeap.js'

type Item = { num: number; frequence: number }

class FrequenceMinHeap extends MinHeap.default<Item> {
  constructor() {
    super()
  }
  getItemValue(item: Item) {
    return item?.frequence ?? NaN
  }
}

// leetcode - 347

const topKFrequent = (nums: number[], k: number): number[] => {
  const numsMap = nums.reduce((numsMap, num) => {
    numsMap.set(num, numsMap.has(num) ? numsMap.get(num)! + 1 : 1)
    return numsMap
  }, new Map() as Map<number, number>)

  const h = new FrequenceMinHeap()

  for (let [num, frequence] of numsMap.entries()) {
    h.insert({ num, frequence })
    if (h.size() > k) {
      h.pop()
    }
  }

  return h.heap.map(({ num }) => num)
}

export {}
