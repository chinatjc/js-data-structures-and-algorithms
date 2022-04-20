// leetcode - 78

const subsets = (
  nums: number[],
  result: number[][] = [],
  sNums: number[] = [],
  start = 0
): number[][] => {
  result.push(sNums)

  for (let i = start; i < nums.length; i++) {
    subsets(nums, result, sNums.concat(nums[i]), i + 1)
  }

  return result
}

export {}
