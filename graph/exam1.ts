// leetCode - 65

const isNumber = (s: string): boolean => {
  return /^[+-]?(\d+|\d+\.|\d+\.\d+|\.\d+)([eE][+-]?\d+)?$/.test(s)
}

export {}
