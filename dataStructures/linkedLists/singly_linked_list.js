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

  // adds new node to the end of the list
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

  // removes last node
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

  // removes first node
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next

    this.length--
    if(this.length === 0) {
      this.tail = null
    }

    return current
  }

  // adds new node to the start of the list
  unshift(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++

    return this
  }

  // get node at specific spot in the list
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head

    while(counter !== index) {
      current = current.next
      counter++
    }

    return current
  }

  // updates the value of a node at a specific index
  set(index, val) {
    let current = this.get(index)

    if (!current) return false

    current.val = val
    return true
  }

  // insert a new node at a specific index
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) {
      this.push(val)
    } else if (index === 0) {
      this.unshift(val)
    } else {
      let previous = this.get(index - 1)
      const node = new Node(val)
      node.next = previous.next
      previous.next = node
    }

    this.length++
    return true
  }

  // remove a node at a given index
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()

    const previous = this.get(index - 1)
    const current = previous.next
    previous.next = current.next

    this.length--
    return current
  }

  // this method is just to help us see what's happening when we reverse the list
  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }

  // reverse the list in place
  reverse() {
    // swap the heads and the tails
    let node = this.head
    this.head = this.tail
    this.tail = node

    let previous = null
    let next

    // loop through the list and reverse the nodes
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = previous
      previous = node
      node = next
    }

    return this
  }
}

const list = new LinkedList()
list.push('test1')
list.push('test2')
list.push('test4')
list.push('test5')


list.print()

list.insert(2, "test30")
list.insert(3, "test3")
list.remove(2)

list.print()

list.reverse()
list.print()
