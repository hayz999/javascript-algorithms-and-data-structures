class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    // create the vertex if it doesn't exist
    if (!this.adjacencyList[v1]) this.addVertex(v1)
    if (!this.adjacencyList[v2]) this.addVertex(v2)

    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    this.adjacencyList[vertex].map(edge => this.removeEdge(vertex, edge))

    delete this.adjacencyList[vertex]
  }

  // recursive version
  depthFirstTraversal(vertex) {
    let results = []
    let visited = {}
    // you need the ; here otherwise this line errors out
    const adjacencyList = this.adjacencyList;

    (function traverse(vertex) {
      if(!vertex) return null

      results.push(vertex)
      visited[vertex] = true

      adjacencyList[vertex].forEach(edge => {
        if (!visited[edge]) {
          return traverse(edge)
        }
      })
    })(vertex)

    console.log(results);
    return results
  }

  // iterative version
  dfsIterative(vertex) {
    let results = []
    let stack = [vertex]
    let visited = {}
    let currentVertex

    visited[vertex] = true

    while(stack.length) {
      currentVertex = stack.pop()
      results.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(edge => {
        if(!visited[edge]) {
          visited[edge] = true
          stack.push(edge)
        }
      })
    }

    console.log(results);
    return results
  }

  breadthFirstTraversal(vertex) {
    let q = [vertex]
    let results = []
    let visited = {}
    let currentVertex

    visited[vertex] = true

    while (q.length) {
      currentVertex = q.shift()
      results.push(currentVertex)
      
      this.adjacencyList[currentVertex].forEach(edge => {
        if(!visited[edge]) {
          visited[edge] = true
          q.push(edge)
        }
      })
    }

    console.log(results);
    return results
  }
}

const graph = new Graph()
graph.addVertex("Cats")
graph.addVertex("Lizards")
graph.addVertex("Bad Pets")

graph.addEdge("Cats", "Rey")
graph.addEdge("Lizards", "Rex")
graph.addEdge("Lizards", "Aurene")
graph.addEdge("Cats", "Rex")
graph.addEdge("Pets", "Rey")
graph.addEdge("Pets", "Rex")
graph.addEdge("Pets", "Aurene")
graph.addEdge("Bad Pets", "Rey")

// console.log(graph);

graph.removeEdge("Cats", "Rex")
// console.log(graph);

graph.removeVertex("Bad Pets")
console.log(graph);

graph.depthFirstTraversal("Pets")
graph.dfsIterative("Pets")
graph.breadthFirstTraversal("Pets")