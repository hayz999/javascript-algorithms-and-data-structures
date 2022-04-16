class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val)
    this.bubbleUp(val)
    return this.values
  }

  bubbleUp(val) {
    let index = this.values.length - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/2)
      let parent = this.values[parentIndex]

      if (val <= parent) break

      if (val > parent) {
        this.values[parentIndex] = val
        this.values[index] = parent
        index = parentIndex
      }
    }
  }

  extractMax() {
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

        if (leftChild > element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

        if (
            (rightChild > element && !swap) || 
            (swap && rightChild > leftChild)
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

let heap = new MaxBinaryHeap()
heap.insert(10)
heap.insert(5)
heap.insert(50)
heap.insert(25)
heap.insert(400)
heap.insert(3)
heap.extractMax()
console.log(heap);
