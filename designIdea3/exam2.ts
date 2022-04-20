// leetcode - 455

const maxProfit = (prices: number[]): number => {
  let sum = 0
  let buy = 0
  let state: 'on' | 'off' = 'off'

  for (let i = 0; i < prices.length; i++) {
    if (state === 'off' && prices[i] < prices[i + 1]) {
      buy = prices[i]
      state = 'on'
    }

    if (state === 'on' && prices[i] > (prices[i + 1] || 0)) {
      sum += prices[i] - buy
      state = 'off'
    }
  }

  return sum
}

export {}
