type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | { [k: string]: JSONValue }

type JSONObject = Record<string, JSONValue>

const json: JSONObject = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

const isJsonObject = (value: JSONValue): value is JSONObject => {
  return Object.prototype.toString.call(value) === '[object Object]'
}

// 用深度遍历遍历json，打印 value - path
const dfs = (root: JSONValue, path: string[]) => {
  console.log(root, path)

  if (isJsonObject(root)) {
    Object.keys(root).forEach((k) => {
      dfs(root[k], path.concat(k))
    })
  }
}

dfs(json, [])

export {}
