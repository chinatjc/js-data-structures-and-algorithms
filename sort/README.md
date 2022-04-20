# 排序（Sort）

## 介绍

把乱序的数组变成升序或降序的数组

JS 中的排序：数组的 sort 方法

## 冒泡排序

- 从第一个元素开始，比较所有相邻的元素，如果第一个比第二个大，则交换这两个元素。
- 接着从第二、三、...、n - 1 个元素重复第一步。

```typescript
const bubbleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length - i; j++) {
      if (list[j - 1] > list[j]) {
        const temp = list[j - 1]
        list[j - 1] = list[j]
        list[j] = temp
      }
    }
  }
}
```

## 选择排序的思路

- 找到数组中的最小值，将其放置到第一位。
- 找到数组中的第二小的值，将其放置到第二位。
- 以次类堆，执行 n - 1 轮。

```typescript
const selectionSort = (list: number[]) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minValueIndex = i

    for (let j = i + 1; j < list.length; j++) {
      if (list[minValueIndex] > list[j]) {
        minValueIndex = j
      }
    }

    if (minValueIndex !== i) {
      const temp = list[i]
      list[i] = list[minValueIndex]
      list[minValueIndex] = temp
    }
  }
}
```

## 插入排序

- 从第二个数开始，该元素作为`未排序元素`，该元素之前的元素看作`有序序列`。
- 通过比较大小，`未排序元素`插入到`有序序列`中。
- 以次类堆，进行到最后一个元素。

```typescript
const insertionSort = (list: number[]) => {
  for (let i = 1; i < list.length; i++) {
    let insertValue = list[i]
    let j = i

    while (j > 0) {
      if (list[j - 1] > insertValue) {
        list[j] = list[j - 1]
      } else {
        break
      }
      j--
    }

    list[j] = insertValue
  }
}
```

## 归并排序

- 分：将数组一分为二，递归地对子数组进行`分`的操作，直到分为只含有一个或者两个元素的数组。
- 合：将两个子数组合并为一个有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组。

```typescript
const mergeSort = (list: number[]): number[] => {
  if (list.length < 2) return list

  const sortList: number[] = []

  const mid = Math.floor(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid, list.length)
  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)

  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      sortList.push(
        orderLeft[0] < orderRight[0] ? orderLeft.shift()! : orderRight.shift()!
      )
    } else if (orderLeft.length) {
      sortList.push(orderLeft.shift()!)
    } else if (orderRight.length) {
      sortList.push(orderRight.shift()!)
    }
  }

  return sortList
}
```

## 快速排序

- 数组中第一个元素作为`基准`，所有比基准小的元素放在基准前面，比基准大的元素放在基准后面。
- 递归地对基准前后的子数组进行分区。

```typescript
const quickSort = (list: number[]): number[] => {
  if (list.length < 2) return list

  const markItem = list[0]

  let [left, right] = list.reduce(
    (sList, item, i) => {
      const [left, right] = sList
      if (i) (item < markItem ? left : right).push(item)
      return sList
    },
    [[], []] as number[][]
  )

  return [...quickSort(left), markItem, ...quickSort(right)]
}
```
