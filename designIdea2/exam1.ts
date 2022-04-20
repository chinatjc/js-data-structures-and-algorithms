// leetcode - 70

/*
 * n 可以分解为 n-1 和 n-2 两个数值的和
 */

const climbStairs = (n: number): number => {
  if (n < 2) return 1

  let step_1_types = 1
  let step_2_types = 1

  for (let i = 2; i <= n; i++) {
    const temp = step_2_types
    step_2_types = step_1_types + step_2_types
    step_1_types = temp
  }

  return step_2_types
}

export {}
