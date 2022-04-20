# 搜索（Search）

## 介绍

找出数组中某个元素的下标。

JS 中的搜索：数组的 indexOf 方法

## 顺序搜索

- 遍历数组。
- 如果找到与目标值相等的元素，则返回该元素的下标。
- 遍历结束后，如果没有找到目标值，则返回 -1 。

```typescript
const squentailSearch = (list: number[], t: number): number => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === t) return i
  }
  return -1
}
```

## 二分搜索

- 前提：数组元素依次排列。
- 从数组的中间元素开发，如果中间元素正好是目标值，则搜索结束。
- 如果目标值小于或大于中间元素，则在小于或大于中间元素的那一半数组中搜索。

```typescript
const binarySearch = (list: number[], item: number): number => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = list[mid]

    if (element < item) low = mid + 1
    else if (element > item) high = mid - 1
    else return mid
  }

  return -1
}
```
