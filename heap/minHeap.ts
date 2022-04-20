class MinHeap<Item> {
  heap: Item[]

  constructor() {
    this.heap = []
  }
  protected getItemValue(item: Item): number {
    return typeof item === 'number' ? item : 0
  }
  private swap(i1: number, i2: number) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }
  private getChildrenIndex(i: number) {
    return [2 * i + 1, 2 * i + 2]
  }
  private shiftUp(i: number) {
    if (i === 0) return
    const pI = this.getParentIndex(i)
    if (this.getItemValue(this.heap[i]) < this.getItemValue(this.heap[pI])) {
      this.swap(i, pI)
      this.shiftUp(pI)
    }
  }
  private shiftDown(i: number) {
    const [cI1, cI2] = this.getChildrenIndex(i)
    if (this.getItemValue(this.heap[i]) > this.getItemValue(this.heap[cI1])) {
      this.swap(i, cI1)
      this.shiftDown(cI1)
    }
    if (this.getItemValue(this.heap[i]) > this.getItemValue(this.heap[cI2])) {
      this.swap(i, cI2)
      this.shiftDown(cI2)
    }
  }
  insert(item: Item) {
    // 插入元素
    this.heap.push(item)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    // 删除堆顶
    const lastItem = this.heap.pop()

    if (!this.size()) return

    if (lastItem !== undefined) this.heap[0] = lastItem
    this.shiftDown(0)
  }
  peek() {
    // 返回堆顶元素
    return this.heap[0]
  }
  size() {
    // 返回堆元素的个数
    return this.heap.length
  }
}

export default MinHeap
