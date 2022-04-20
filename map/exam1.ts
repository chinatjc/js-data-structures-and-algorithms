// leetcode - 1

const twoSum = (nums: number[], target: number): number[] => {
  const numsMap: Map<number, { index: number }> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - num1

    const num2Info = numsMap.get(num2)
    if (num2Info) return [num2Info.index, i]
    else numsMap.set(num1, { index: i })
  }

  return [-1, -1]
}
