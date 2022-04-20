// leetcode - 46

const permute = (nums: number[]): number[][] => {
  const rec = (nums: number[], pNums: number[], result: number[][]) => {
    if (pNums.length >= nums.length) {
      result.push(pNums)
      return result
    }

    nums.forEach((num) => {
      if (!pNums.includes(num)) rec(nums, [...pNums, num], result)
    })

    return result
  }

  return rec(nums, [], [])
}

const permute1 = (nums: number[]): number[][] => {
  if (nums.length < 2) return [nums]

  let result: number[][] = [...nums.map((num) => [num])]

  for (let i = 1; i < nums.length; i++) {
    result = result.reduce((nResult, pNums) => {
      nums.forEach((num) => {
        if (!pNums.includes(num)) nResult.push([...pNums, num])
      })

      return nResult
    }, [] as number[][])
  }

  return result
}

export {}
