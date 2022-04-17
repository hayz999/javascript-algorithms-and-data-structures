# Graphs

## What is a graph?
- a graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
- a tree and linked lists are special cases of a graph
- a graph is a series of nodes and the connections between those nodes
- there is no parent or starting point 

## Use cases for graphs
- social networks
- location / mapping
- routing algorithms
- visual hierarchy
- file system optimizations
- recommendation engines 

## Types of graphs
- essential graph terms:
  - vertex - a node
  - edge - connection between nodes
- weighted/unweighted - values assigned to distances between vertices
  - map applications use weighted graphs which means each connection (or edge) has a value assigned to it
- directed/undirected - directions assigned to distance between vertices

## Storing graphs
- adjacency matrix:
  - a matrix is a 2 dimensional structure that stores arrays in rows
  - store nodes and their connections in a matrix
- adjacency list:
  - use an array or list to store edges 
  - at each index for an edge, store an array of that edges connection indexes 
  - can also use a hash table to store nodes and that nodes connections 
- differences & Big O of the two types to store graphs:
  - |V| - number of vertices
  - |E| - number of edges

    | Operation | Adjacency List | Adjacency Matrix |
    |---|---|---|
    | Add vertex | O(1) | O(V^2) |
    | Add edge | O(1) | O(1) |
    | Remove vertex | O(V + E) | O(V^2) |
    | Remove edge | O(E) | O(1) |
    | Query | O(V + E) | O(1) |
    | Storage | O(V + E) | O(V^2) |
  - adjacency list
    - can take up less space (in sparse graphs)
    - faster to iterate over all edges
    - can be slower to lookup specific edge
  - adjacency matrix
    - takes up more space (in sparse graphs)
    - slower to iterate over all edges
    - faster to lookup specific edge

## Implementing an adjacency list

### Add vertex
- pseudocode:
  - write a method called addVertex, which accepts a name of a vertex
  - it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

### Adding an edge
- pseudocode
  - this function should accept two vertices we can call them vertex1 and vertex2
  - the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  - the function should find in the adjacency list the key of vertex2 and push vertex1 to the array

## Removing an edge
- pseudocode:
  - this function should accept two vertices, we'll call them v1 and v2
  - the function should reassign the key of v1 to be an array that does not contain v2
  - the function should reassign the key of v2 to be an array that does not contain v1

## Removing a vertex
- pseudocode:
  - the function should accept a vertex to remove
  - the function should loop as long as there are any other vertices in the adjacency list for that vertex
  - inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  - delete the key in the adjacency list for that vertex
  