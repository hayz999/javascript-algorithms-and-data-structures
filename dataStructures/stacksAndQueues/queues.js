class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  // add to the end of the list
  enqueue(val) {
    const node = new Node(val)
    
    if (!this.first) {
      this.first = node
      this.last = this.first
    } else {
      this.last.next = node
      this.last = node
    }
    this.length++
    return this.length
  }

  // remove from the start of the list
  dequeue() {
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
