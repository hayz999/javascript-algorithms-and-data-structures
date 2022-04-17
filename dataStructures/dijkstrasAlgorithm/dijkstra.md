# Dijkstra's Algorithm

## Importance of Dijkstra's
- what is his algorithm?
  - one of the most famous and widely used algorithms around
  - finds the shortest path between two vertices on a graph (or fastest way)
- why is it useful?
  - GPS - finding fastest route
  - network routing - finds open shortest path for data
  - biology - used to model the spread of viruses among humans
  - airline tickets - finding cheapest route to your destination

## Weighted Graph
- a graph that has a value between each node
  - for example distance between locations

## The approach
1. every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. once we've moved to the node we're going to visit, we look at each of it's neighbors
3. for each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
4. if the new total distance to a node is less than the previous total, we store the new shorter distance for that node

## Pseudocode
- this function should accept a starting and ending vertex
- create an object (we'll call it distance) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
- after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
- create another object called previous and set each key to be every vertex in the adjacency list with a value of null
- start looping as long as there is anything in the priority queue
  - dequeue a vertex from the priority queue
  - if that vertex is the same as the ending vertex - we are done
  - otherwise loop through each value in the adjacency list at that vertex
    - calculate the distance to that vertex from the starting vertex
    - if the distance is less than what is currently stored in our distances object
      - update the distances object with new lower distance
      - update the previous object to contain that vertex
      - enqueue the vertex with the total distance from the start node
- return the shortest path