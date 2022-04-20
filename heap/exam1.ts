import MinHeap from './minHeap'

// leetcode - 215

/*
 * 1. 创建一个最小堆，遍历数组 nums ，向最小堆插入元素
 * 2. 当堆元素的个数超过 k 时，删除堆顶元素（堆顶元素在堆中最小）
 * 3. 遍历结束之后，返回堆顶元素（数组 nums 中最大的 k 个元素，取第一个，即第 k 个最大的元素）
 */

const findKthLargest = (nums: number[], k: number): number => {
  const h = new MinHeap()

  nums.forEach((num) => {
    h.insert(num)
    if (h.size() > k) {
      h.pop()
    }
  })

  return h.peek()
}

export {}
