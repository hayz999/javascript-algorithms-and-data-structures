# Graph Traversal

## What is traversal?
- visiting/updating/checking each vertex in a graph
- uses:
  - peer to peer networking
  - web crawlers
  - finding "closest" matches / recommendations
  - shortest path problems
    - GPS navigation
    - solving mazes
    - AI (shortest path to win the game)

## Depth First Graph Traversal
- explore as far as possible down one path in the graph
- need to keep track of where we have already visited
- pseudocode:
  - write a function that accepts a starting vertex
  - if the vertex is empty, return
  - create a list to store the end result, to be returned at the very end
  - create and object to store visited vertices
  - create a helper function which accepts a vertex
    - the helper function should return early if the vertex is empty
    - the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    - loop over all of the values in the adjacencyList for that vertex
    - if any of those values have not been visited, recursively invoke the helper function with that vertex
  - invoke the helper function with the starting vertex
  - return the results array

## Breadth First Traversal
- visit all of the neighbors of the current node before moving onto the neighbors neighbors
- pseudocode:
  - this function should accept a starting vertex
  - create a queue (you can use an array) and place the starting vertex in it
  - create an array to store the results
  - create an object to store nodes visited
  - mark the starting vertex as visited
  - loop as long as there is anything in the queue
  - remove the first vertex from the queue and push it into the results array
  - loop over each vertex in the adjacency list for the vertex you are visiting
  - if it is not inside the object that stores visited nodes, mark it as visited and enqueue that vertex
  - return the results array