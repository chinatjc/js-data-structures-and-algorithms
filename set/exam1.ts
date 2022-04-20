// leetcode - 349

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const resultNums: number[] = []

  for (let item1 of nums1Set) {
    if (nums2Set.has(item1)) resultNums.push(item1)
  }

  return resultNums
}

export {}
