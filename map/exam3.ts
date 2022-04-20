// leetcode - 76

/*
 * 1. 用双指针维护—个滑动窗口
 * 2. 移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的子串的长度
 * 3. 循环上述过程，找出包含T的最小子串
 */

const minWindow = (s: string, t: string): string => {
  if (t.length > s.length) return ''

  let li = 0
  let ri = 0
  let minSubString = ''

  const need = t.split('').reduce((need, char) => {
    const charLength = need.get(char) || 0
    need.set(char, charLength + 1)
    return need
  }, new Map() as Map<string, number>)

  let needTypeLength = need.size

  for (; ri < s.length; ri++) {
    const char = s[ri]

    // 移动右指针，找到包含T的子字符串
    if (need.has(char)) {
      need.set(char, need.get(char)! - 1)
      if (need.get(char) === 0) needTypeLength -= 1
    }

    // 移动左指针，减少包含T的子字符串的长度
    while (needTypeLength === 0) {
      const subString = s.slice(li, ri + 1)
      if (!minSubString || subString.length < minSubString.length)
        minSubString = subString
      const char = s[li]
      if (need.has(char)) {
        need.set(char, need.get(char)! + 1)
        if (need.get(char)! > 0) needTypeLength += 1
      }

      li++
    }
  }

  return minSubString
}
