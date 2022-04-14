class Node {
  // stores a piece of data
  // stores reference to next node
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    // create a new node
    const node = new Node(val)
    // if this is the first item in the list, set it as the head and tail
    if (!this.head) {
      this.head = node
      this.tail = this.head
    // otherwise set the new node as the next value of the current tail, and reassign the tail to this new node
    } else {
      this.tail.next = node
      this.tail = node
    }
    // increase the list length
    this.length++
    // return the list
    return this
  }

  // a simple way to traverse the whole list
  traverse() {
    let current = this.head
    while(current) {
      current = current.next
    }
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current

    while(current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null

    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }
}

const list = new LinkedList()
list.push('test1')
list.push('test2')

console.log("Starting list: ", list)

list.pop()

console.log("Popped: ", list)
