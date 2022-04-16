class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }

  push(val) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    const currentTail = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = currentTail.prev
      currentTail.prev = null
      this.tail.next = null
    }
    
    this.length--
    return currentTail
  }

  shift() {
    if (!this.head) return undefined

    const currentHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = currentHead.next
      this.head.prev = null
      currentHead.next = null
    }

    this.length--
    return currentHead
  }

  unshift(val) {
    const node = new Node(val)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let current

    let middle = this.length / 2
    if(index <= middle) {
      current = this.head
      let counter = 0
      while(counter !== index) {
        current = current.next
        counter++
      }
    } else {
      current = this.tail
      let counter = this.length - 1
      while(counter !== index) {
        current = current.prev
        counter--
      }
    }

    return current
  }

  set(index, val) {
    let current = this.get(index)

    if (!current) return false

    current.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false

    if (index === 0) {
      this.unshift(val)
    } else if(index === this.length) {
      this.push(val)
    } else {
      let previous = this.get(index - 1)
      const node = new Node(val)

      node.next = previous.next
      node.prev = previous
      previous.next.prev = node
      previous.next = node
    }

    this.length++
    return true
  }
  
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    
    const current = this.get(index)

    current.prev.next = current.next
    current.next.prev = current.prev
    current.next = null
    current.prev = null
    
    this.length--
    return current
  }
}

const list = new DoublyLinkedList()
list.push('test1')
list.push('test2')
list.push('test4')
list.push('test5')

list.print()

list.unshift('test6')
list.print()

list.insert(2, 'test100')
list.print()