// leetcode - 198

/*
 * 偷窃到第 i 间房屋时，可以获得的最高金额：f(i) = Math.max( f(i - 2) + nums[i], f(i - 1) )
 * 重复上述公式，计算出结果
 */

const rob = (nums: number[]): number => {
  let res0 = 0
  let res1 = nums[0] || 0

  for (let i = 1; i < nums.length; i++) {
    const res2 = Math.max(nums[i] + res0, res1)
    res0 = res1
    res1 = res2
  }

  return res1
}

export {}
