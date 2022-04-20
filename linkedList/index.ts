type Item = Record<string, unknown> & { next?: Item }

const a: Item = { val: 'a' }
const b: Item = { val: 'b' }
const c: Item = { val: 'c' }
const d: Item = { val: 'd' }
a.next = b
b.next = c
c.next = d

// 遍历链表
let p: Item | undefined = a
while (p) {
  console.log(p.val)
  p = p.next
}

// 插入：在 c 与 d 之间，插入 e
const e: Item = { val: 'e' }
const cNext = c.next
c.next = e
e.next = cNext

// 删除 e
const eNext = e.next
c.next = eNext

export {}
