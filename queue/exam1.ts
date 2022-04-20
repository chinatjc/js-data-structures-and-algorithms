// leetcode - 933

class RecentCounter {
  pingList: number[] = []
  time: number = 3000

  constructor() {}

  ping(t: number): number {
    const minTime = t - this.time

    this.pingList.push(t)

    while (this.pingList[0] < minTime) this.pingList.shift()

    return this.pingList.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
