class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    const node = new Node(val, priority)
    this.values.push(node)
    this.bubbleUp(node)
    return this.values
  }

  bubbleUp(node) {
    let index = this.values.length - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/2)
      let parent = this.values[parentIndex]

      if (node.priority >= parent.priority) break

      if (node.priority < parent.priority) {
        this.values[parentIndex] = node
        this.values[index] = parent
        index = parentIndex
      }
    }
  }

  dequeue() {
    const start = this.values[0]
    const end = this.values.pop()
    
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubbleDown() 
    }
    
    return start
  }

  bubbleDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null
      
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

        if (
            (rightChild.priority > element.priority && !swap) || 
            (swap && rightChild.priority > leftChild.priority)
          ) {
          swap = rightChildIndex
        }
      }

      if (!swap) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}

let queue = new PriorityQueue()

queue.enqueue("Learn hash tables", 1)
queue.enqueue("Get a snack", 3)
queue.enqueue("Drink some water", 2)
queue.enqueue("Watch Youtube", 6)
console.log(queue);

queue.dequeue()
console.log(queue);

queue.enqueue("Study", 1)
console.log(queue);