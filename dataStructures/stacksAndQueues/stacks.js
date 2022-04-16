class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  // like unshift in singly linked list
  push(val) {
    const node = new Node(val)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      node.next = this.first
      this.first = node
    }
    this.length++

    return this.length
  }

  // like shift in singly linked list
  pop() {
    if (!this.first) return null
    let current = this.first
    this.first = current.next

    this.length--
    if(this.length === 0) {
      this.last = null
    }

    return current.val
  }
}
