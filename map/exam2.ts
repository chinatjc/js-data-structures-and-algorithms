// leetcode - 3

// 利用双指针维护一个滑动的窗口，用来剪切子字符串
// 右指针不断向前移动，遇到子字符串中存在的重复字符，就把左指针移动到重复字符的下一位
// 过程中，记录子字符串的最大值

const lengthOfLongestSubstring = (s: string): number => {
  if (!s) return s.length

  let li = 0
  let maxLength = 0
  const charIndexMap = new Map()

  for (let ri = 0; ri < s.length; ri++) {
    if (charIndexMap.has(s[ri]) && charIndexMap.get(s[ri]) >= li) {
      li = charIndexMap.get(s[ri]) + 1
    }

    charIndexMap.set(s[ri], ri)

    maxLength = Math.max(maxLength, ri + 1 - li)
  }

  return maxLength
}
