// leetcode - 20

/*
 * 1. 新建一个栈。
 * 2. 扫描字符串；遇到左括号就入栈；遇到右括号，判断栈顶括号是否与该右括号匹配，如果匹配则出栈，否则直接判断为不合法。
 * 3. 最后，判断栈是否为空，为空则合法，否则不合法。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: string) => {
  const bracketsMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  const leftBracketsStack = []

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i]
    const isLeftBracket = bracketsMap.has(bracket)

    if (isLeftBracket) leftBracketsStack.push(bracket)
    else {
      const leftBracketsStackTop =
        leftBracketsStack[leftBracketsStack.length - 1]

      if (bracketsMap.get(leftBracketsStackTop) === bracket)
        leftBracketsStack.pop()
      else return false
    }
  }

  return !leftBracketsStack.length
}
