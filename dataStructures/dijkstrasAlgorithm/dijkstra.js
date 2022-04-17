class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) this.addVertex(v1)
    if (!this.adjacencyList[v2]) this.addVertex(v2)

    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
  }

  shortestPath(start, end) {
    const nodes = new PriorityQueue()
    let previous = {}
    let distance = {}
    let path = []
    let smallest
    
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distance[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val

      if(smallest === end) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if(smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distance[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node

          if (candidate < distance[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distance[nextNeighbor] = candidate
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    console.log(path.concat(smallest).reverse());
    return path.concat(smallest).reverse()
  }
}

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

const graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

graph.shortestPath('A', 'E')
